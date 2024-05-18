import {assertNotNull} from '@subsquid/util-internal'
import {TypeormDatabase} from '@subsquid/typeorm-store'
import {
    BlockHeader,
    DataHandlerContext,
    SubstrateBatchProcessor,
    Event as _Event,
    Call as _Call,
    Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'

import {events} from './types'

const fields = {
    event: {
      phase: true,
    },
    extrinsic: {
      signature: true,
      success: true,
      error: true,
      hash: true,
      version: true,
    },
    call: {
      name: true,
      args: true,
    },
    block: {
      timestamp: true,
      stateRoot: true,
      extrinsicsRoot: true,
      validator: true,
    }
  };
export type Fields = typeof fields;
export const database = new TypeormDatabase({supportHotBlocks: true});

export const processor = new SubstrateBatchProcessor()
    .setGateway('https://v2.archive.subsquid.io/network/turing-avail')
    .setRpcEndpoint({
        url: assertNotNull(process.env.RPC_ENDPOINT),
        rateLimit: 10
    })
    .addEvent({
        name: [events.balances.transfer.name],
        extrinsic: true
    })
    .setFields(fields)

export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
