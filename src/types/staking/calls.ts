import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const bond =  {
    name: 'Staking.bond',
    /**
     * See [`Pallet::bond`].
     */
    v24: new CallType(
        'Staking.bond',
        sts.struct({
            value: sts.bigint(),
            payee: v24.RewardDestination,
        })
    ),
}

export const bondExtra =  {
    name: 'Staking.bond_extra',
    /**
     * See [`Pallet::bond_extra`].
     */
    v24: new CallType(
        'Staking.bond_extra',
        sts.struct({
            maxAdditional: sts.bigint(),
        })
    ),
}

export const unbond =  {
    name: 'Staking.unbond',
    /**
     * See [`Pallet::unbond`].
     */
    v24: new CallType(
        'Staking.unbond',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const withdrawUnbonded =  {
    name: 'Staking.withdraw_unbonded',
    /**
     * See [`Pallet::withdraw_unbonded`].
     */
    v24: new CallType(
        'Staking.withdraw_unbonded',
        sts.struct({
            numSlashingSpans: sts.number(),
        })
    ),
}

export const validate =  {
    name: 'Staking.validate',
    /**
     * See [`Pallet::validate`].
     */
    v24: new CallType(
        'Staking.validate',
        sts.struct({
            prefs: v24.ValidatorPrefs,
        })
    ),
}

export const nominate =  {
    name: 'Staking.nominate',
    /**
     * See [`Pallet::nominate`].
     */
    v24: new CallType(
        'Staking.nominate',
        sts.struct({
            targets: sts.array(() => v24.MultiAddress),
        })
    ),
}

export const chill =  {
    name: 'Staking.chill',
    /**
     * See [`Pallet::chill`].
     */
    v24: new CallType(
        'Staking.chill',
        sts.unit()
    ),
}

export const setPayee =  {
    name: 'Staking.set_payee',
    /**
     * See [`Pallet::set_payee`].
     */
    v24: new CallType(
        'Staking.set_payee',
        sts.struct({
            payee: v24.RewardDestination,
        })
    ),
}

export const setController =  {
    name: 'Staking.set_controller',
    /**
     * See [`Pallet::set_controller`].
     */
    v24: new CallType(
        'Staking.set_controller',
        sts.unit()
    ),
}

export const setValidatorCount =  {
    name: 'Staking.set_validator_count',
    /**
     * See [`Pallet::set_validator_count`].
     */
    v24: new CallType(
        'Staking.set_validator_count',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const increaseValidatorCount =  {
    name: 'Staking.increase_validator_count',
    /**
     * See [`Pallet::increase_validator_count`].
     */
    v24: new CallType(
        'Staking.increase_validator_count',
        sts.struct({
            additional: sts.number(),
        })
    ),
}

export const scaleValidatorCount =  {
    name: 'Staking.scale_validator_count',
    /**
     * See [`Pallet::scale_validator_count`].
     */
    v24: new CallType(
        'Staking.scale_validator_count',
        sts.struct({
            factor: v24.Percent,
        })
    ),
}

export const forceNoEras =  {
    name: 'Staking.force_no_eras',
    /**
     * See [`Pallet::force_no_eras`].
     */
    v24: new CallType(
        'Staking.force_no_eras',
        sts.unit()
    ),
}

export const forceNewEra =  {
    name: 'Staking.force_new_era',
    /**
     * See [`Pallet::force_new_era`].
     */
    v24: new CallType(
        'Staking.force_new_era',
        sts.unit()
    ),
}

export const setInvulnerables =  {
    name: 'Staking.set_invulnerables',
    /**
     * See [`Pallet::set_invulnerables`].
     */
    v24: new CallType(
        'Staking.set_invulnerables',
        sts.struct({
            invulnerables: sts.array(() => v24.AccountId32),
        })
    ),
}

export const forceUnstake =  {
    name: 'Staking.force_unstake',
    /**
     * See [`Pallet::force_unstake`].
     */
    v24: new CallType(
        'Staking.force_unstake',
        sts.struct({
            stash: v24.AccountId32,
            numSlashingSpans: sts.number(),
        })
    ),
}

export const forceNewEraAlways =  {
    name: 'Staking.force_new_era_always',
    /**
     * See [`Pallet::force_new_era_always`].
     */
    v24: new CallType(
        'Staking.force_new_era_always',
        sts.unit()
    ),
}

export const cancelDeferredSlash =  {
    name: 'Staking.cancel_deferred_slash',
    /**
     * See [`Pallet::cancel_deferred_slash`].
     */
    v24: new CallType(
        'Staking.cancel_deferred_slash',
        sts.struct({
            era: sts.number(),
            slashIndices: sts.array(() => sts.number()),
        })
    ),
}

export const payoutStakers =  {
    name: 'Staking.payout_stakers',
    /**
     * See [`Pallet::payout_stakers`].
     */
    v24: new CallType(
        'Staking.payout_stakers',
        sts.struct({
            validatorStash: v24.AccountId32,
            era: sts.number(),
        })
    ),
}

export const rebond =  {
    name: 'Staking.rebond',
    /**
     * See [`Pallet::rebond`].
     */
    v24: new CallType(
        'Staking.rebond',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const reapStash =  {
    name: 'Staking.reap_stash',
    /**
     * See [`Pallet::reap_stash`].
     */
    v24: new CallType(
        'Staking.reap_stash',
        sts.struct({
            stash: v24.AccountId32,
            numSlashingSpans: sts.number(),
        })
    ),
}

export const kick =  {
    name: 'Staking.kick',
    /**
     * See [`Pallet::kick`].
     */
    v24: new CallType(
        'Staking.kick',
        sts.struct({
            who: sts.array(() => v24.MultiAddress),
        })
    ),
}

export const setStakingConfigs =  {
    name: 'Staking.set_staking_configs',
    /**
     * See [`Pallet::set_staking_configs`].
     */
    v24: new CallType(
        'Staking.set_staking_configs',
        sts.struct({
            minNominatorBond: v24.ConfigOp,
            minValidatorBond: v24.ConfigOp,
            maxNominatorCount: v24.Type_230,
            maxValidatorCount: v24.Type_230,
            chillThreshold: v24.Type_231,
            minCommission: v24.Type_232,
        })
    ),
}

export const chillOther =  {
    name: 'Staking.chill_other',
    /**
     * See [`Pallet::chill_other`].
     */
    v24: new CallType(
        'Staking.chill_other',
        sts.struct({
            stash: v24.AccountId32,
        })
    ),
}

export const forceApplyMinCommission =  {
    name: 'Staking.force_apply_min_commission',
    /**
     * See [`Pallet::force_apply_min_commission`].
     */
    v24: new CallType(
        'Staking.force_apply_min_commission',
        sts.struct({
            validatorStash: v24.AccountId32,
        })
    ),
}

export const setMinCommission =  {
    name: 'Staking.set_min_commission',
    /**
     * See [`Pallet::set_min_commission`].
     */
    v24: new CallType(
        'Staking.set_min_commission',
        sts.struct({
            new: v24.Perbill,
        })
    ),
}

export const payoutStakersByPage =  {
    name: 'Staking.payout_stakers_by_page',
    /**
     * See [`Pallet::payout_stakers_by_page`].
     */
    v24: new CallType(
        'Staking.payout_stakers_by_page',
        sts.struct({
            validatorStash: v24.AccountId32,
            era: sts.number(),
            page: sts.number(),
        })
    ),
}

export const updatePayee =  {
    name: 'Staking.update_payee',
    /**
     * See [`Pallet::update_payee`].
     */
    v24: new CallType(
        'Staking.update_payee',
        sts.struct({
            controller: v24.AccountId32,
        })
    ),
}

export const deprecateControllerBatch =  {
    name: 'Staking.deprecate_controller_batch',
    /**
     * See [`Pallet::deprecate_controller_batch`].
     */
    v24: new CallType(
        'Staking.deprecate_controller_batch',
        sts.struct({
            controllers: sts.array(() => v24.AccountId32),
        })
    ),
}
