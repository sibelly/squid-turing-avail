import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v24: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV24,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v24: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV24,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v24: new StorageType('Balances.Account', 'Default', [v24.AccountId32], v24.AccountData) as AccountV24,
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.AccountData
    get(block: Block, key: v24.AccountId32): Promise<(v24.AccountData | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.AccountData | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.AccountData | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v24: new StorageType('Balances.Locks', 'Default', [v24.AccountId32], sts.array(() => v24.BalanceLock)) as LocksV24,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.BalanceLock[]
    get(block: Block, key: v24.AccountId32): Promise<(v24.BalanceLock[] | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.BalanceLock[] | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v24: new StorageType('Balances.Reserves', 'Default', [v24.AccountId32], sts.array(() => v24.ReserveData)) as ReservesV24,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.ReserveData[]
    get(block: Block, key: v24.AccountId32): Promise<(v24.ReserveData[] | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.ReserveData[] | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.ReserveData[] | undefined)][]>
}

export const holds =  {
    /**
     *  Holds on account balances.
     */
    v24: new StorageType('Balances.Holds', 'Default', [v24.AccountId32], sts.array(() => v24.IdAmount)) as HoldsV24,
}

/**
 *  Holds on account balances.
 */
export interface HoldsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.IdAmount[]
    get(block: Block, key: v24.AccountId32): Promise<(v24.IdAmount[] | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.IdAmount[] | undefined)][]>
}

export const freezes =  {
    /**
     *  Freeze locks on account balances.
     */
    v24: new StorageType('Balances.Freezes', 'Default', [v24.AccountId32], sts.array(() => v24.Type_368)) as FreezesV24,
}

/**
 *  Freeze locks on account balances.
 */
export interface FreezesV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.Type_368[]
    get(block: Block, key: v24.AccountId32): Promise<(v24.Type_368[] | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.Type_368[] | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.Type_368[] | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.Type_368[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.Type_368[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.Type_368[] | undefined)][]>
}
