import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const created =  {
    name: 'NominationPools.Created',
    /**
     * A pool has been created.
     */
    v24: new EventType(
        'NominationPools.Created',
        sts.struct({
            depositor: v24.AccountId32,
            poolId: sts.number(),
        })
    ),
}

export const bonded =  {
    name: 'NominationPools.Bonded',
    /**
     * A member has became bonded in a pool.
     */
    v24: new EventType(
        'NominationPools.Bonded',
        sts.struct({
            member: v24.AccountId32,
            poolId: sts.number(),
            bonded: sts.bigint(),
            joined: sts.boolean(),
        })
    ),
}

export const paidOut =  {
    name: 'NominationPools.PaidOut',
    /**
     * A payout has been made to a member.
     */
    v24: new EventType(
        'NominationPools.PaidOut',
        sts.struct({
            member: v24.AccountId32,
            poolId: sts.number(),
            payout: sts.bigint(),
        })
    ),
}

export const unbonded =  {
    name: 'NominationPools.Unbonded',
    /**
     * A member has unbonded from their pool.
     * 
     * - `balance` is the corresponding balance of the number of points that has been
     *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
     *   pool.
     * - `points` is the number of points that are issued as a result of `balance` being
     * dissolved into the corresponding unbonding pool.
     * - `era` is the era in which the balance will be unbonded.
     * In the absence of slashing, these values will match. In the presence of slashing, the
     * number of points that are issued in the unbonding pool will be less than the amount
     * requested to be unbonded.
     */
    v24: new EventType(
        'NominationPools.Unbonded',
        sts.struct({
            member: v24.AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
            era: sts.number(),
        })
    ),
}

export const withdrawn =  {
    name: 'NominationPools.Withdrawn',
    /**
     * A member has withdrawn from their pool.
     * 
     * The given number of `points` have been dissolved in return of `balance`.
     * 
     * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
     * will be 1.
     */
    v24: new EventType(
        'NominationPools.Withdrawn',
        sts.struct({
            member: v24.AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
        })
    ),
}

export const destroyed =  {
    name: 'NominationPools.Destroyed',
    /**
     * A pool has been destroyed.
     */
    v24: new EventType(
        'NominationPools.Destroyed',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const stateChanged =  {
    name: 'NominationPools.StateChanged',
    /**
     * The state of a pool has changed
     */
    v24: new EventType(
        'NominationPools.StateChanged',
        sts.struct({
            poolId: sts.number(),
            newState: v24.PoolState,
        })
    ),
}

export const memberRemoved =  {
    name: 'NominationPools.MemberRemoved',
    /**
     * A member has been removed from a pool.
     * 
     * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
     */
    v24: new EventType(
        'NominationPools.MemberRemoved',
        sts.struct({
            poolId: sts.number(),
            member: v24.AccountId32,
        })
    ),
}

export const rolesUpdated =  {
    name: 'NominationPools.RolesUpdated',
    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    v24: new EventType(
        'NominationPools.RolesUpdated',
        sts.struct({
            root: sts.option(() => v24.AccountId32),
            bouncer: sts.option(() => v24.AccountId32),
            nominator: sts.option(() => v24.AccountId32),
        })
    ),
}

export const poolSlashed =  {
    name: 'NominationPools.PoolSlashed',
    /**
     * The active balance of pool `pool_id` has been slashed to `balance`.
     */
    v24: new EventType(
        'NominationPools.PoolSlashed',
        sts.struct({
            poolId: sts.number(),
            balance: sts.bigint(),
        })
    ),
}

export const unbondingPoolSlashed =  {
    name: 'NominationPools.UnbondingPoolSlashed',
    /**
     * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
     */
    v24: new EventType(
        'NominationPools.UnbondingPoolSlashed',
        sts.struct({
            poolId: sts.number(),
            era: sts.number(),
            balance: sts.bigint(),
        })
    ),
}

export const poolCommissionUpdated =  {
    name: 'NominationPools.PoolCommissionUpdated',
    /**
     * A pool's commission setting has been changed.
     */
    v24: new EventType(
        'NominationPools.PoolCommissionUpdated',
        sts.struct({
            poolId: sts.number(),
            current: sts.option(() => sts.tuple(() => [v24.Perbill, v24.AccountId32])),
        })
    ),
}

export const poolMaxCommissionUpdated =  {
    name: 'NominationPools.PoolMaxCommissionUpdated',
    /**
     * A pool's maximum commission setting has been changed.
     */
    v24: new EventType(
        'NominationPools.PoolMaxCommissionUpdated',
        sts.struct({
            poolId: sts.number(),
            maxCommission: v24.Perbill,
        })
    ),
}

export const poolCommissionChangeRateUpdated =  {
    name: 'NominationPools.PoolCommissionChangeRateUpdated',
    /**
     * A pool's commission `change_rate` has been changed.
     */
    v24: new EventType(
        'NominationPools.PoolCommissionChangeRateUpdated',
        sts.struct({
            poolId: sts.number(),
            changeRate: v24.CommissionChangeRate,
        })
    ),
}

export const poolCommissionClaimPermissionUpdated =  {
    name: 'NominationPools.PoolCommissionClaimPermissionUpdated',
    /**
     * Pool commission claim permission has been updated.
     */
    v24: new EventType(
        'NominationPools.PoolCommissionClaimPermissionUpdated',
        sts.struct({
            poolId: sts.number(),
            permission: sts.option(() => v24.CommissionClaimPermission),
        })
    ),
}

export const poolCommissionClaimed =  {
    name: 'NominationPools.PoolCommissionClaimed',
    /**
     * Pool commission has been claimed.
     */
    v24: new EventType(
        'NominationPools.PoolCommissionClaimed',
        sts.struct({
            poolId: sts.number(),
            commission: sts.bigint(),
        })
    ),
}

export const minBalanceDeficitAdjusted =  {
    name: 'NominationPools.MinBalanceDeficitAdjusted',
    /**
     * Topped up deficit in frozen ED of the reward pool.
     */
    v24: new EventType(
        'NominationPools.MinBalanceDeficitAdjusted',
        sts.struct({
            poolId: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const minBalanceExcessAdjusted =  {
    name: 'NominationPools.MinBalanceExcessAdjusted',
    /**
     * Claimed excess frozen ED of af the reward pool.
     */
    v24: new EventType(
        'NominationPools.MinBalanceExcessAdjusted',
        sts.struct({
            poolId: sts.number(),
            amount: sts.bigint(),
        })
    ),
}
