import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const join =  {
    name: 'NominationPools.join',
    /**
     * See [`Pallet::join`].
     */
    v24: new CallType(
        'NominationPools.join',
        sts.struct({
            amount: sts.bigint(),
            poolId: sts.number(),
        })
    ),
}

export const bondExtra =  {
    name: 'NominationPools.bond_extra',
    /**
     * See [`Pallet::bond_extra`].
     */
    v24: new CallType(
        'NominationPools.bond_extra',
        sts.struct({
            extra: v24.BondExtra,
        })
    ),
}

export const claimPayout =  {
    name: 'NominationPools.claim_payout',
    /**
     * See [`Pallet::claim_payout`].
     */
    v24: new CallType(
        'NominationPools.claim_payout',
        sts.unit()
    ),
}

export const unbond =  {
    name: 'NominationPools.unbond',
    /**
     * See [`Pallet::unbond`].
     */
    v24: new CallType(
        'NominationPools.unbond',
        sts.struct({
            memberAccount: v24.MultiAddress,
            unbondingPoints: sts.bigint(),
        })
    ),
}

export const poolWithdrawUnbonded =  {
    name: 'NominationPools.pool_withdraw_unbonded',
    /**
     * See [`Pallet::pool_withdraw_unbonded`].
     */
    v24: new CallType(
        'NominationPools.pool_withdraw_unbonded',
        sts.struct({
            poolId: sts.number(),
            numSlashingSpans: sts.number(),
        })
    ),
}

export const withdrawUnbonded =  {
    name: 'NominationPools.withdraw_unbonded',
    /**
     * See [`Pallet::withdraw_unbonded`].
     */
    v24: new CallType(
        'NominationPools.withdraw_unbonded',
        sts.struct({
            memberAccount: v24.MultiAddress,
            numSlashingSpans: sts.number(),
        })
    ),
}

export const create =  {
    name: 'NominationPools.create',
    /**
     * See [`Pallet::create`].
     */
    v24: new CallType(
        'NominationPools.create',
        sts.struct({
            amount: sts.bigint(),
            root: v24.MultiAddress,
            nominator: v24.MultiAddress,
            bouncer: v24.MultiAddress,
        })
    ),
}

export const createWithPoolId =  {
    name: 'NominationPools.create_with_pool_id',
    /**
     * See [`Pallet::create_with_pool_id`].
     */
    v24: new CallType(
        'NominationPools.create_with_pool_id',
        sts.struct({
            amount: sts.bigint(),
            root: v24.MultiAddress,
            nominator: v24.MultiAddress,
            bouncer: v24.MultiAddress,
            poolId: sts.number(),
        })
    ),
}

export const nominate =  {
    name: 'NominationPools.nominate',
    /**
     * See [`Pallet::nominate`].
     */
    v24: new CallType(
        'NominationPools.nominate',
        sts.struct({
            poolId: sts.number(),
            validators: sts.array(() => v24.AccountId32),
        })
    ),
}

export const setState =  {
    name: 'NominationPools.set_state',
    /**
     * See [`Pallet::set_state`].
     */
    v24: new CallType(
        'NominationPools.set_state',
        sts.struct({
            poolId: sts.number(),
            state: v24.PoolState,
        })
    ),
}

export const setMetadata =  {
    name: 'NominationPools.set_metadata',
    /**
     * See [`Pallet::set_metadata`].
     */
    v24: new CallType(
        'NominationPools.set_metadata',
        sts.struct({
            poolId: sts.number(),
            metadata: sts.bytes(),
        })
    ),
}

export const setConfigs =  {
    name: 'NominationPools.set_configs',
    /**
     * See [`Pallet::set_configs`].
     */
    v24: new CallType(
        'NominationPools.set_configs',
        sts.struct({
            minJoinBond: v24.Type_266,
            minCreateBond: v24.Type_266,
            maxPools: v24.Type_267,
            maxMembers: v24.Type_267,
            maxMembersPerPool: v24.Type_267,
            globalMaxCommission: v24.Type_268,
        })
    ),
}

export const updateRoles =  {
    name: 'NominationPools.update_roles',
    /**
     * See [`Pallet::update_roles`].
     */
    v24: new CallType(
        'NominationPools.update_roles',
        sts.struct({
            poolId: sts.number(),
            newRoot: v24.Type_269,
            newNominator: v24.Type_269,
            newBouncer: v24.Type_269,
        })
    ),
}

export const chill =  {
    name: 'NominationPools.chill',
    /**
     * See [`Pallet::chill`].
     */
    v24: new CallType(
        'NominationPools.chill',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const bondExtraOther =  {
    name: 'NominationPools.bond_extra_other',
    /**
     * See [`Pallet::bond_extra_other`].
     */
    v24: new CallType(
        'NominationPools.bond_extra_other',
        sts.struct({
            member: v24.MultiAddress,
            extra: v24.BondExtra,
        })
    ),
}

export const setClaimPermission =  {
    name: 'NominationPools.set_claim_permission',
    /**
     * See [`Pallet::set_claim_permission`].
     */
    v24: new CallType(
        'NominationPools.set_claim_permission',
        sts.struct({
            permission: v24.ClaimPermission,
        })
    ),
}

export const claimPayoutOther =  {
    name: 'NominationPools.claim_payout_other',
    /**
     * See [`Pallet::claim_payout_other`].
     */
    v24: new CallType(
        'NominationPools.claim_payout_other',
        sts.struct({
            other: v24.AccountId32,
        })
    ),
}

export const setCommission =  {
    name: 'NominationPools.set_commission',
    /**
     * See [`Pallet::set_commission`].
     */
    v24: new CallType(
        'NominationPools.set_commission',
        sts.struct({
            poolId: sts.number(),
            newCommission: sts.option(() => sts.tuple(() => [v24.Perbill, v24.AccountId32])),
        })
    ),
}

export const setCommissionMax =  {
    name: 'NominationPools.set_commission_max',
    /**
     * See [`Pallet::set_commission_max`].
     */
    v24: new CallType(
        'NominationPools.set_commission_max',
        sts.struct({
            poolId: sts.number(),
            maxCommission: v24.Perbill,
        })
    ),
}

export const setCommissionChangeRate =  {
    name: 'NominationPools.set_commission_change_rate',
    /**
     * See [`Pallet::set_commission_change_rate`].
     */
    v24: new CallType(
        'NominationPools.set_commission_change_rate',
        sts.struct({
            poolId: sts.number(),
            changeRate: v24.CommissionChangeRate,
        })
    ),
}

export const claimCommission =  {
    name: 'NominationPools.claim_commission',
    /**
     * See [`Pallet::claim_commission`].
     */
    v24: new CallType(
        'NominationPools.claim_commission',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const adjustPoolDeposit =  {
    name: 'NominationPools.adjust_pool_deposit',
    /**
     * See [`Pallet::adjust_pool_deposit`].
     */
    v24: new CallType(
        'NominationPools.adjust_pool_deposit',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const setCommissionClaimPermission =  {
    name: 'NominationPools.set_commission_claim_permission',
    /**
     * See [`Pallet::set_commission_claim_permission`].
     */
    v24: new CallType(
        'NominationPools.set_commission_claim_permission',
        sts.struct({
            poolId: sts.number(),
            permission: sts.option(() => v24.CommissionClaimPermission),
        })
    ),
}
