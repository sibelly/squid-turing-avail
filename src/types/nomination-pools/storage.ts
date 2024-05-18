import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const totalValueLocked =  {
    /**
     *  The sum of funds across all pools.
     * 
     *  This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]
     *  because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's
     *  `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s.
     */
    v24: new StorageType('NominationPools.TotalValueLocked', 'Default', [], sts.bigint()) as TotalValueLockedV24,
}

/**
 *  The sum of funds across all pools.
 * 
 *  This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]
 *  because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's
 *  `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s.
 */
export interface TotalValueLockedV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minJoinBond =  {
    /**
     *  Minimum amount to bond to join a pool.
     */
    v24: new StorageType('NominationPools.MinJoinBond', 'Default', [], sts.bigint()) as MinJoinBondV24,
}

/**
 *  Minimum amount to bond to join a pool.
 */
export interface MinJoinBondV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minCreateBond =  {
    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     * 
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    v24: new StorageType('NominationPools.MinCreateBond', 'Default', [], sts.bigint()) as MinCreateBondV24,
}

/**
 *  Minimum bond required to create a pool.
 * 
 *  This is the amount that the depositor must put as their initial stake in the pool, as an
 *  indication of "skin in the game".
 * 
 *  This is the value that will always exist in the staking ledger of the pool bonded account
 *  while all other accounts leave.
 */
export interface MinCreateBondV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const maxPools =  {
    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    v24: new StorageType('NominationPools.MaxPools', 'Optional', [], sts.number()) as MaxPoolsV24,
}

/**
 *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
 *  pools can exist.
 */
export interface MaxPoolsV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const maxPoolMembers =  {
    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    v24: new StorageType('NominationPools.MaxPoolMembers', 'Optional', [], sts.number()) as MaxPoolMembersV24,
}

/**
 *  Maximum number of members that can exist in the system. If `None`, then the count
 *  members are not bound on a system wide basis.
 */
export interface MaxPoolMembersV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const maxPoolMembersPerPool =  {
    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    v24: new StorageType('NominationPools.MaxPoolMembersPerPool', 'Optional', [], sts.number()) as MaxPoolMembersPerPoolV24,
}

/**
 *  Maximum number of members that may belong to pool. If `None`, then the count of
 *  members is not bound on a per pool basis.
 */
export interface MaxPoolMembersPerPoolV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const globalMaxCommission =  {
    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     *  `GlobalMaxCommission` is lower than some current pool commissions.
     */
    v24: new StorageType('NominationPools.GlobalMaxCommission', 'Optional', [], v24.Perbill) as GlobalMaxCommissionV24,
}

/**
 *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
 *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
 *  `GlobalMaxCommission` is lower than some current pool commissions.
 */
export interface GlobalMaxCommissionV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v24.Perbill | undefined)>
}

export const poolMembers =  {
    /**
     *  Active members.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v24: new StorageType('NominationPools.PoolMembers', 'Optional', [v24.AccountId32], v24.PoolMember) as PoolMembersV24,
}

/**
 *  Active members.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface PoolMembersV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.AccountId32): Promise<(v24.PoolMember | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.PoolMember | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.PoolMember | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.PoolMember | undefined)][]>
}

export const counterForPoolMembers =  {
    /**
     * Counter for the related counted storage map
     */
    v24: new StorageType('NominationPools.CounterForPoolMembers', 'Default', [], sts.number()) as CounterForPoolMembersV24,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForPoolMembersV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const bondedPools =  {
    /**
     *  Storage for bonded pools.
     */
    v24: new StorageType('NominationPools.BondedPools', 'Optional', [sts.number()], v24.BondedPoolInner) as BondedPoolsV24,
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v24.BondedPoolInner | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v24.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v24.BondedPoolInner | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v24.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v24.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v24.BondedPoolInner | undefined)][]>
}

export const counterForBondedPools =  {
    /**
     * Counter for the related counted storage map
     */
    v24: new StorageType('NominationPools.CounterForBondedPools', 'Default', [], sts.number()) as CounterForBondedPoolsV24,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForBondedPoolsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const rewardPools =  {
    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
     *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    v24: new StorageType('NominationPools.RewardPools', 'Optional', [sts.number()], v24.RewardPool) as RewardPoolsV24,
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
 *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface RewardPoolsV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v24.RewardPool | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v24.RewardPool | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v24.RewardPool | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v24.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v24.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v24.RewardPool | undefined)][]>
}

export const counterForRewardPools =  {
    /**
     * Counter for the related counted storage map
     */
    v24: new StorageType('NominationPools.CounterForRewardPools', 'Default', [], sts.number()) as CounterForRewardPoolsV24,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForRewardPoolsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const subPoolsStorage =  {
    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a
     *  bonded pool, hence the name sub-pools. Keyed by the bonded pools account.
     */
    v24: new StorageType('NominationPools.SubPoolsStorage', 'Optional', [sts.number()], v24.SubPools) as SubPoolsStorageV24,
}

/**
 *  Groups of unbonding pools. Each group of unbonding pools belongs to a
 *  bonded pool, hence the name sub-pools. Keyed by the bonded pools account.
 */
export interface SubPoolsStorageV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v24.SubPools | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v24.SubPools | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v24.SubPools | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v24.SubPools | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v24.SubPools | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v24.SubPools | undefined)][]>
}

export const counterForSubPoolsStorage =  {
    /**
     * Counter for the related counted storage map
     */
    v24: new StorageType('NominationPools.CounterForSubPoolsStorage', 'Default', [], sts.number()) as CounterForSubPoolsStorageV24,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForSubPoolsStorageV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const metadata =  {
    /**
     *  Metadata for the pool.
     */
    v24: new StorageType('NominationPools.Metadata', 'Default', [sts.number()], sts.bytes()) as MetadataV24,
}

/**
 *  Metadata for the pool.
 */
export interface MetadataV24  {
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

export const counterForMetadata =  {
    /**
     * Counter for the related counted storage map
     */
    v24: new StorageType('NominationPools.CounterForMetadata', 'Default', [], sts.number()) as CounterForMetadataV24,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForMetadataV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const lastPoolId =  {
    /**
     *  Ever increasing number of all pools created so far.
     */
    v24: new StorageType('NominationPools.LastPoolId', 'Default', [], sts.number()) as LastPoolIdV24,
}

/**
 *  Ever increasing number of all pools created so far.
 */
export interface LastPoolIdV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const reversePoolIdLookup =  {
    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    v24: new StorageType('NominationPools.ReversePoolIdLookup', 'Optional', [v24.AccountId32], sts.number()) as ReversePoolIdLookupV24,
}

/**
 *  A reverse lookup from the pool's account id to its id.
 * 
 *  This is only used for slashing. In all other instances, the pool id is used, and the
 *  accounts are deterministically derived from it.
 */
export interface ReversePoolIdLookupV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (number | undefined)][]>
}

export const counterForReversePoolIdLookup =  {
    /**
     * Counter for the related counted storage map
     */
    v24: new StorageType('NominationPools.CounterForReversePoolIdLookup', 'Default', [], sts.number()) as CounterForReversePoolIdLookupV24,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForReversePoolIdLookupV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const claimPermissions =  {
    /**
     *  Map from a pool member account to their opted claim permission.
     */
    v24: new StorageType('NominationPools.ClaimPermissions', 'Default', [v24.AccountId32], v24.ClaimPermission) as ClaimPermissionsV24,
}

/**
 *  Map from a pool member account to their opted claim permission.
 */
export interface ClaimPermissionsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.ClaimPermission
    get(block: Block, key: v24.AccountId32): Promise<(v24.ClaimPermission | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.ClaimPermission | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.ClaimPermission | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.ClaimPermission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.ClaimPermission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.ClaimPermission | undefined)][]>
}
