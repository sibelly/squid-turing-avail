import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const listNodes =  {
    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    v24: new StorageType('VoterList.ListNodes', 'Optional', [v24.AccountId32], v24.Node) as ListNodesV24,
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface ListNodesV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.AccountId32): Promise<(v24.Node | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.Node | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.Node | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.Node | undefined)][]>
}

export const counterForListNodes =  {
    /**
     * Counter for the related counted storage map
     */
    v24: new StorageType('VoterList.CounterForListNodes', 'Default', [], sts.number()) as CounterForListNodesV24,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForListNodesV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const listBags =  {
    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    v24: new StorageType('VoterList.ListBags', 'Optional', [sts.bigint()], v24.Bag) as ListBagsV24,
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface ListBagsV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v24.Bag | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v24.Bag | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v24.Bag | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v24.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v24.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v24.Bag | undefined)][]>
}
