import {TypeormDatabase, Store} from '@subsquid/typeorm-store'
import {In} from 'typeorm'
import * as ss58 from '@subsquid/ss58'
import assert from 'assert'
import { Block, DataHandlerContext, SubstrateBatchProcessor } from "@subsquid/substrate-processor";

import {processor, ProcessorContext, database, Fields} from './processor'
import {Account, Transfer} from './model'
import {events} from './types'
import { BlockManager } from "./process/blockManager"

export let ctx: DataHandlerContext<Store, Fields>;
export let headReached = process.env.HEAD_REACHED === 'true'; // default to false
const BATCH_SIZE = parseInt(process.env.PROCESSOR_BATCH_SIZE || '1000');

// Original
// processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
//     let transferEvents: TransferEvent[] = getTransferEvents(ctx)

//     let accounts: Map<string, Account> = await createAccounts(ctx, transferEvents)
//     let transfers: Transfer[] = createTransfers(transferEvents, accounts)

//     await ctx.store.upsert([...accounts.values()])
//     await ctx.store.insert(transfers)
// })


processor.run(database, async (ctx_) => {
    ctx = ctx_;
    for (let i = 0; i < ctx.blocks.length; i += BATCH_SIZE) {
      const batch =  ctx.blocks.slice(i, i + BATCH_SIZE);
      await processBatch(batch);
    }
  });


  const processBatch = async (batch: Block<Fields>[]) => {
  
    // Initialize managers
    const blockManager: BlockManager = new BlockManager();
 
    if (batch.length > 1) ctx.log.debug(`Batch size: ${batch.length}`);
  
    // Process blocks
    for (const block of batch) {
      if (!headReached && ctx.blocks[0].header.height > 1 && ctx.isHead 
          && block.header.height === ctx.blocks[ctx.blocks.length - 1].header.height) {
        headReached = true;
        // To see later
        // Another manager in process dir
        // await updateFromHead(block.header);
      }
  
      blockManager.process(block.header);
  
      ctx.log.debug(`Processing block ${block.header.height}`);
  
      for (const event of block.events) {
        if (event.phase === "Initialization" && 
            (event.name === 'Staking.StakingElection' || event.name === 'Staking.StakersElected') ) {
                // Another manager in process dir
          // await stakingElectionManager.process(event);
        } else if (event.phase === "ApplyExtrinsic") {
          //const signedData = await extrinsicManager.process(event);
          //eventManager.process(event);
  
        //   switch (event.name) {
        //     case 'EVM.Log':
        //       await evmEventManager.process(event, signedData, transferManager, accountManager, ctx.store);
        //       break;
        //     case 'EVM.Created':
        //       await contractManager.process(event);
        //       break;
        //     case 'EVM.ExecutedFailed':
        //       await evmEventManager.process(event, signedData, transferManager, accountManager);
        //       break;
  
        //     case 'EvmAccounts.ClaimAccount':
        //       const addressClaimer = hexToNativeAddress(event.args[0]);
        //       await accountManager.process(addressClaimer, block.header, true, true);
        //       break;
  
        //     case 'Balances.Endowed':
        //       const addressEndowed = hexToNativeAddress(event.args[0]);
        //       await accountManager.process(addressEndowed, block.header);
        //       break;
        //     case 'Balances.Reserved':
        //       const addressReserved = hexToNativeAddress(event.args[0]);
        //       await accountManager.process(addressReserved, block.header);
        //       break;
        //     case 'Balances.Transfer':
        //       await transferManager.process(event, accountManager, reefVerifiedContract, signedData, true);
        //       break;
  
        //     case 'Staking.Rewarded':
        //       await stakingManager.process(event, accountManager);
        //       break;
  
        //     case 'System.KilledAccount':
        //       const address = hexToNativeAddress(event.args);
        //       await accountManager.process(address, block.header, false);
        //       break;
        //   }
        }
      }
    }
  
    // Save data to database
    ctx.log.info(`Saving blocks from ${batch[0].header.height} to ${batch[batch.length - 1].header.height}`);
    const blocks = await blockManager.save();

};


// Original
interface TransferEvent {
    id: string
    blockNumber: number
    timestamp: Date
    extrinsicHash?: string
    from: string
    to: string
    amount: bigint
    fee?: bigint
}

function getTransferEvents(ctx: ProcessorContext<Store>): TransferEvent[] {
    // Filters and decodes the arriving events
    let transfers: TransferEvent[] = []
    for (let block of ctx.blocks) {
        for (let event of block.events) {
            if (event.name == events.balances.transfer.name) {
                let rec: {from: string; to: string; amount: bigint}
                if (events.balances.transfer.v24.is(event)) {
                    rec = events.balances.transfer.v24.decode(event)
                }
                else {
                    throw new Error('Unsupported spec')
                }

                assert(block.header.timestamp, `Got an undefined timestamp at block ${block.header.height}`)

                transfers.push({
                    id: event.id,
                    blockNumber: block.header.height,
                    timestamp: new Date(block.header.timestamp),
                    extrinsicHash: event.extrinsic?.hash,
                    from: ss58.codec(42).encode(rec.from),
                    to: ss58.codec(42).encode(rec.to),
                    // from: ss58.codec('kusama').encode(rec.from),
                    // to: ss58.codec('kusama').encode(rec.to),
                    amount: rec.amount,
                    // fee: event.extrinsic?.fee || 0n,
                })
            }
        }
    }
    return transfers
}

async function createAccounts(ctx: ProcessorContext<Store>, transferEvents: TransferEvent[]): Promise<Map<string,Account>> {
    const accountIds = new Set<string>()
    for (let t of transferEvents) {
        accountIds.add(t.from)
        accountIds.add(t.to)
    }

    const accounts = await ctx.store.findBy(Account, {id: In([...accountIds])}).then((accounts) => {
        return new Map(accounts.map((a) => [a.id, a]))
    })

    for (let t of transferEvents) {
        updateAccounts(t.from)
        updateAccounts(t.to)
    }

    function updateAccounts(id: string): void {
        const acc = accounts.get(id)
        if (acc == null) {
            accounts.set(id, new Account({id}))
        }
    }

    return accounts
}

function createTransfers(transferEvents: TransferEvent[], accounts: Map<string, Account>): Transfer[] {
    let transfers: Transfer[] = []
    for (let t of transferEvents) {
        let {id, blockNumber, timestamp, extrinsicHash, amount, fee} = t
        let from = accounts.get(t.from)
        let to = accounts.get(t.to)
        transfers.push(new Transfer({
            id,
            blockNumber,
            timestamp,
            extrinsicHash,
            from,
            to,
            amount,
            fee,
        }))
    }
    return transfers
}
