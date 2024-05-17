import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v24 from '../v24'
import * as v30 from '../v30'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v24: new StorageType('System.Account', 'Default', [v24.AccountId32], v24.AccountInfo) as AccountV24,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.AccountInfo
    get(block: Block, key: v24.AccountId32): Promise<(v24.AccountInfo | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.AccountInfo | undefined)][]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    v24: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountV24,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    v24: new StorageType('System.BlockWeight', 'Default', [], v24.PerDispatchClass) as BlockWeightV24,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.PerDispatchClass
    get(block: Block): Promise<(v24.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    v24: new StorageType('System.AllExtrinsicsLen', 'Optional', [], v24.ExtrinsicLen) as AllExtrinsicsLenV24,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v24.ExtrinsicLen | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v24: new StorageType('System.BlockHash', 'Default', [sts.number()], v24.H256) as BlockHashV24,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.H256
    get(block: Block, key: number): Promise<(v24.H256 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v24.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v24.H256 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v24.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v24.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v24.H256 | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    v24: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataV24,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}

export const number =  {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    v24: new StorageType('System.Number', 'Default', [], sts.number()) as NumberV24,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    v24: new StorageType('System.ParentHash', 'Default', [], v24.H256) as ParentHashV24,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.H256
    get(block: Block): Promise<(v24.H256 | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    v24: new StorageType('System.Digest', 'Default', [], v24.Digest) as DigestV24,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.Digest
    get(block: Block): Promise<(v24.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v24: new StorageType('System.Events', 'Default', [], sts.array(() => v24.EventRecord)) as EventsV24,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v30: new StorageType('System.Events', 'Default', [], sts.array(() => v30.EventRecord)) as EventsV30,
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.EventRecord[]
    get(block: Block): Promise<(v24.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV30  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v30.EventRecord[]
    get(block: Block): Promise<(v30.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    v24: new StorageType('System.EventCount', 'Default', [], sts.number()) as EventCountV24,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const eventTopics =  {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    v24: new StorageType('System.EventTopics', 'Default', [v24.H256], sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))) as EventTopicsV24,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block, key: v24.H256): Promise<([number, number][] | undefined)>
    getMany(block: Block, keys: v24.H256[]): Promise<([number, number][] | undefined)[]>
    getKeys(block: Block): Promise<v24.H256[]>
    getKeys(block: Block, key: v24.H256): Promise<v24.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.H256): AsyncIterable<v24.H256[]>
    getPairs(block: Block): Promise<[k: v24.H256, v: ([number, number][] | undefined)][]>
    getPairs(block: Block, key: v24.H256): Promise<[k: v24.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.H256): AsyncIterable<[k: v24.H256, v: ([number, number][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v24: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v24.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV24,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v24.LastRuntimeUpgradeInfo | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    v24: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountV24,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    v24: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountV24,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    v24: new StorageType('System.ExecutionPhase', 'Optional', [], v24.Type_116) as ExecutionPhaseV24,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v24.Type_116 | undefined)>
}

export const authorizedUpgrade =  {
    /**
     *  `Some` if a code upgrade has been authorized.
     */
    v24: new StorageType('System.AuthorizedUpgrade', 'Optional', [], v24.CodeUpgradeAuthorization) as AuthorizedUpgradeV24,
}

/**
 *  `Some` if a code upgrade has been authorized.
 */
export interface AuthorizedUpgradeV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v24.CodeUpgradeAuthorization | undefined)>
}

export const dynamicBlockLength =  {
    /**
     *  The dynamic block length
     */
    v24: new StorageType('System.DynamicBlockLength', 'Default', [], v24.BlockLength) as DynamicBlockLengthV24,
}

/**
 *  The dynamic block length
 */
export interface DynamicBlockLengthV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.BlockLength
    get(block: Block): Promise<(v24.BlockLength | undefined)>
}
