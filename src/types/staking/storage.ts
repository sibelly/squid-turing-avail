import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const validatorCount =  {
    /**
     *  The ideal number of active validators.
     */
    v24: new StorageType('Staking.ValidatorCount', 'Default', [], sts.number()) as ValidatorCountV24,
}

/**
 *  The ideal number of active validators.
 */
export interface ValidatorCountV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const minimumValidatorCount =  {
    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    v24: new StorageType('Staking.MinimumValidatorCount', 'Default', [], sts.number()) as MinimumValidatorCountV24,
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface MinimumValidatorCountV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const invulnerables =  {
    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    v24: new StorageType('Staking.Invulnerables', 'Default', [], sts.array(() => v24.AccountId32)) as InvulnerablesV24,
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface InvulnerablesV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.AccountId32[]
    get(block: Block): Promise<(v24.AccountId32[] | undefined)>
}

export const bonded =  {
    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v24: new StorageType('Staking.Bonded', 'Optional', [v24.AccountId32], v24.AccountId32) as BondedV24,
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface BondedV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.AccountId32): Promise<(v24.AccountId32 | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.AccountId32 | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.AccountId32 | undefined)][]>
}

export const minNominatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    v24: new StorageType('Staking.MinNominatorBond', 'Default', [], sts.bigint()) as MinNominatorBondV24,
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface MinNominatorBondV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minValidatorBond =  {
    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    v24: new StorageType('Staking.MinValidatorBond', 'Default', [], sts.bigint()) as MinValidatorBondV24,
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface MinValidatorBondV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minimumActiveStake =  {
    /**
     *  The minimum active nominator stake of the last successful election.
     */
    v24: new StorageType('Staking.MinimumActiveStake', 'Default', [], sts.bigint()) as MinimumActiveStakeV24,
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface MinimumActiveStakeV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minCommission =  {
    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    v24: new StorageType('Staking.MinCommission', 'Default', [], v24.Perbill) as MinCommissionV24,
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface MinCommissionV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.Perbill
    get(block: Block): Promise<(v24.Perbill | undefined)>
}

export const ledger =  {
    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     * 
     *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
     *  by [`StakingLedger`] to ensure data and lock consistency.
     */
    v24: new StorageType('Staking.Ledger', 'Optional', [v24.AccountId32], v24.StakingLedger) as LedgerV24,
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 * 
 *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
 *  by [`StakingLedger`] to ensure data and lock consistency.
 */
export interface LedgerV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.AccountId32): Promise<(v24.StakingLedger | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.StakingLedger | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.StakingLedger | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.StakingLedger | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.StakingLedger | undefined)][]>
}

export const payee =  {
    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v24: new StorageType('Staking.Payee', 'Optional', [v24.AccountId32], v24.RewardDestination) as PayeeV24,
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface PayeeV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.AccountId32): Promise<(v24.RewardDestination | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.RewardDestination | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.RewardDestination | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.RewardDestination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.RewardDestination | undefined)][]>
}

export const validators =  {
    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v24: new StorageType('Staking.Validators', 'Default', [v24.AccountId32], v24.ValidatorPrefs) as ValidatorsV24,
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface ValidatorsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.ValidatorPrefs
    get(block: Block, key: v24.AccountId32): Promise<(v24.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.ValidatorPrefs | undefined)][]>
}

export const counterForValidators =  {
    /**
     * Counter for the related counted storage map
     */
    v24: new StorageType('Staking.CounterForValidators', 'Default', [], sts.number()) as CounterForValidatorsV24,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForValidatorsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const maxValidatorsCount =  {
    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    v24: new StorageType('Staking.MaxValidatorsCount', 'Optional', [], sts.number()) as MaxValidatorsCountV24,
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxValidatorsCountV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const nominators =  {
    /**
     *  The map from nominator stash key to their nomination preferences, namely the validators that
     *  they wish to support.
     * 
     *  Note that the keys of this storage map might become non-decodable in case the
     *  account's [`NominationsQuota::MaxNominations`] configuration is decreased.
     *  In this rare case, these nominators
     *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
     *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
     *  nominators will effectively not-exist, until they re-submit their preferences such that it
     *  is within the bounds of the newly set `Config::MaxNominations`.
     * 
     *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
     *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
     *  number of keys that exist.
     * 
     *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
     *  [`Call::chill_other`] dispatchable by anyone.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v24: new StorageType('Staking.Nominators', 'Optional', [v24.AccountId32], v24.Nominations) as NominatorsV24,
}

/**
 *  The map from nominator stash key to their nomination preferences, namely the validators that
 *  they wish to support.
 * 
 *  Note that the keys of this storage map might become non-decodable in case the
 *  account's [`NominationsQuota::MaxNominations`] configuration is decreased.
 *  In this rare case, these nominators
 *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
 *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
 *  nominators will effectively not-exist, until they re-submit their preferences such that it
 *  is within the bounds of the newly set `Config::MaxNominations`.
 * 
 *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
 *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
 *  number of keys that exist.
 * 
 *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
 *  [`Call::chill_other`] dispatchable by anyone.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface NominatorsV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.AccountId32): Promise<(v24.Nominations | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.Nominations | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.Nominations | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.Nominations | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.Nominations | undefined)][]>
}

export const counterForNominators =  {
    /**
     * Counter for the related counted storage map
     */
    v24: new StorageType('Staking.CounterForNominators', 'Default', [], sts.number()) as CounterForNominatorsV24,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForNominatorsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const maxNominatorsCount =  {
    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    v24: new StorageType('Staking.MaxNominatorsCount', 'Optional', [], sts.number()) as MaxNominatorsCountV24,
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface MaxNominatorsCountV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const currentEra =  {
    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    v24: new StorageType('Staking.CurrentEra', 'Optional', [], sts.number()) as CurrentEraV24,
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface CurrentEraV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const activeEra =  {
    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    v24: new StorageType('Staking.ActiveEra', 'Optional', [], v24.ActiveEraInfo) as ActiveEraV24,
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface ActiveEraV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v24.ActiveEraInfo | undefined)>
}

export const erasStartSessionIndex =  {
    /**
     *  The session index at which the era start for the last [`Config::HistoryDepth`] eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    v24: new StorageType('Staking.ErasStartSessionIndex', 'Optional', [sts.number()], sts.number()) as ErasStartSessionIndexV24,
}

/**
 *  The session index at which the era start for the last [`Config::HistoryDepth`] eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface ErasStartSessionIndexV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(number | undefined)>
    getMany(block: Block, keys: number[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (number | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (number | undefined)][]>
}

export const erasStakers =  {
    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after [`Config::HistoryDepth`] eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     * 
     *  Note: Deprecated since v14. Use `EraInfo` instead to work with exposures.
     */
    v24: new StorageType('Staking.ErasStakers', 'Default', [sts.number(), v24.AccountId32], v24.Exposure) as ErasStakersV24,
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after [`Config::HistoryDepth`] eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 * 
 *  Note: Deprecated since v14. Use `EraInfo` instead to work with exposures.
 */
export interface ErasStakersV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.Exposure
    get(block: Block, key1: number, key2: v24.AccountId32): Promise<(v24.Exposure | undefined)>
    getMany(block: Block, keys: [number, v24.AccountId32][]): Promise<(v24.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v24.AccountId32): Promise<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[number, v24.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairs(block: Block, key1: number, key2: v24.AccountId32): Promise<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
}

export const erasStakersOverview =  {
    /**
     *  Summary of validator exposure at a given era.
     * 
     *  This contains the total stake in support of the validator and their own stake. In addition,
     *  it can also be used to get the number of nominators backing this validator and the number of
     *  exposure pages they are divided into. The page count is useful to determine the number of
     *  pages of rewards that needs to be claimed.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     *  Should only be accessed through `EraInfo`.
     * 
     *  Is it removed after [`Config::HistoryDepth`] eras.
     *  If stakers hasn't been set or has been removed then empty overview is returned.
     */
    v24: new StorageType('Staking.ErasStakersOverview', 'Optional', [sts.number(), v24.AccountId32], v24.PagedExposureMetadata) as ErasStakersOverviewV24,
}

/**
 *  Summary of validator exposure at a given era.
 * 
 *  This contains the total stake in support of the validator and their own stake. In addition,
 *  it can also be used to get the number of nominators backing this validator and the number of
 *  exposure pages they are divided into. The page count is useful to determine the number of
 *  pages of rewards that needs to be claimed.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 *  Should only be accessed through `EraInfo`.
 * 
 *  Is it removed after [`Config::HistoryDepth`] eras.
 *  If stakers hasn't been set or has been removed then empty overview is returned.
 */
export interface ErasStakersOverviewV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v24.AccountId32): Promise<(v24.PagedExposureMetadata | undefined)>
    getMany(block: Block, keys: [number, v24.AccountId32][]): Promise<(v24.PagedExposureMetadata | undefined)[]>
    getKeys(block: Block): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v24.AccountId32): Promise<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[number, v24.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v24.AccountId32], v: (v24.PagedExposureMetadata | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v24.AccountId32], v: (v24.PagedExposureMetadata | undefined)][]>
    getPairs(block: Block, key1: number, key2: v24.AccountId32): Promise<[k: [number, v24.AccountId32], v: (v24.PagedExposureMetadata | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.PagedExposureMetadata | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.PagedExposureMetadata | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.PagedExposureMetadata | undefined)][]>
}

export const erasStakersClipped =  {
    /**
     *  Clipped Exposure of validator at era.
     * 
     *  Note: This is deprecated, should be used as read-only and will be removed in the future.
     *  New `Exposure`s are stored in a paged manner in `ErasStakersPaged` instead.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxExposurePageSize` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  It is removed after [`Config::HistoryDepth`] eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     * 
     *  Note: Deprecated since v14. Use `EraInfo` instead to work with exposures.
     */
    v24: new StorageType('Staking.ErasStakersClipped', 'Default', [sts.number(), v24.AccountId32], v24.Exposure) as ErasStakersClippedV24,
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  Note: This is deprecated, should be used as read-only and will be removed in the future.
 *  New `Exposure`s are stored in a paged manner in `ErasStakersPaged` instead.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
 *  `T::MaxExposurePageSize` biggest stakers.
 *  (Note: the field `total` and `own` of the exposure remains unchanged).
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  It is removed after [`Config::HistoryDepth`] eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 * 
 *  Note: Deprecated since v14. Use `EraInfo` instead to work with exposures.
 */
export interface ErasStakersClippedV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.Exposure
    get(block: Block, key1: number, key2: v24.AccountId32): Promise<(v24.Exposure | undefined)>
    getMany(block: Block, keys: [number, v24.AccountId32][]): Promise<(v24.Exposure | undefined)[]>
    getKeys(block: Block): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v24.AccountId32): Promise<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[number, v24.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairs(block: Block, key1: number, key2: v24.AccountId32): Promise<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.Exposure | undefined)][]>
}

export const erasStakersPaged =  {
    /**
     *  Paginated exposure of a validator at given era.
     * 
     *  This is keyed first by the era index to allow bulk deletion, then stash account and finally
     *  the page. Should only be accessed through `EraInfo`.
     * 
     *  This is cleared after [`Config::HistoryDepth`] eras.
     */
    v24: new StorageType('Staking.ErasStakersPaged', 'Optional', [sts.number(), v24.AccountId32, sts.number()], v24.ExposurePage) as ErasStakersPagedV24,
}

/**
 *  Paginated exposure of a validator at given era.
 * 
 *  This is keyed first by the era index to allow bulk deletion, then stash account and finally
 *  the page. Should only be accessed through `EraInfo`.
 * 
 *  This is cleared after [`Config::HistoryDepth`] eras.
 */
export interface ErasStakersPagedV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v24.AccountId32, key3: number): Promise<(v24.ExposurePage | undefined)>
    getMany(block: Block, keys: [number, v24.AccountId32, number][]): Promise<(v24.ExposurePage | undefined)[]>
    getKeys(block: Block): Promise<[number, v24.AccountId32, number][]>
    getKeys(block: Block, key1: number): Promise<[number, v24.AccountId32, number][]>
    getKeys(block: Block, key1: number, key2: v24.AccountId32): Promise<[number, v24.AccountId32, number][]>
    getKeys(block: Block, key1: number, key2: v24.AccountId32, key3: number): Promise<[number, v24.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v24.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v24.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[number, v24.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32, key3: number): AsyncIterable<[number, v24.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [number, v24.AccountId32, number], v: (v24.ExposurePage | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v24.AccountId32, number], v: (v24.ExposurePage | undefined)][]>
    getPairs(block: Block, key1: number, key2: v24.AccountId32): Promise<[k: [number, v24.AccountId32, number], v: (v24.ExposurePage | undefined)][]>
    getPairs(block: Block, key1: number, key2: v24.AccountId32, key3: number): Promise<[k: [number, v24.AccountId32, number], v: (v24.ExposurePage | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v24.AccountId32, number], v: (v24.ExposurePage | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v24.AccountId32, number], v: (v24.ExposurePage | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[k: [number, v24.AccountId32, number], v: (v24.ExposurePage | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32, key3: number): AsyncIterable<[k: [number, v24.AccountId32, number], v: (v24.ExposurePage | undefined)][]>
}

export const claimedRewards =  {
    /**
     *  History of claimed paged rewards by era and validator.
     * 
     *  This is keyed by era and validator stash which maps to the set of page indexes which have
     *  been claimed.
     * 
     *  It is removed after [`Config::HistoryDepth`] eras.
     */
    v24: new StorageType('Staking.ClaimedRewards', 'Default', [sts.number(), v24.AccountId32], sts.array(() => sts.number())) as ClaimedRewardsV24,
}

/**
 *  History of claimed paged rewards by era and validator.
 * 
 *  This is keyed by era and validator stash which maps to the set of page indexes which have
 *  been claimed.
 * 
 *  It is removed after [`Config::HistoryDepth`] eras.
 */
export interface ClaimedRewardsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block, key1: number, key2: v24.AccountId32): Promise<(number[] | undefined)>
    getMany(block: Block, keys: [number, v24.AccountId32][]): Promise<(number[] | undefined)[]>
    getKeys(block: Block): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v24.AccountId32): Promise<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[number, v24.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v24.AccountId32], v: (number[] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v24.AccountId32], v: (number[] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v24.AccountId32): Promise<[k: [number, v24.AccountId32], v: (number[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v24.AccountId32], v: (number[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v24.AccountId32], v: (number[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[k: [number, v24.AccountId32], v: (number[] | undefined)][]>
}

export const erasValidatorPrefs =  {
    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after [`Config::HistoryDepth`] eras.
     */
    v24: new StorageType('Staking.ErasValidatorPrefs', 'Default', [sts.number(), v24.AccountId32], v24.ValidatorPrefs) as ErasValidatorPrefsV24,
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after [`Config::HistoryDepth`] eras.
 */
export interface ErasValidatorPrefsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.ValidatorPrefs
    get(block: Block, key1: number, key2: v24.AccountId32): Promise<(v24.ValidatorPrefs | undefined)>
    getMany(block: Block, keys: [number, v24.AccountId32][]): Promise<(v24.ValidatorPrefs | undefined)[]>
    getKeys(block: Block): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v24.AccountId32): Promise<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[number, v24.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v24.AccountId32], v: (v24.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v24.AccountId32], v: (v24.ValidatorPrefs | undefined)][]>
    getPairs(block: Block, key1: number, key2: v24.AccountId32): Promise<[k: [number, v24.AccountId32], v: (v24.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.ValidatorPrefs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[k: [number, v24.AccountId32], v: (v24.ValidatorPrefs | undefined)][]>
}

export const erasValidatorReward =  {
    /**
     *  The total validator era payout for the last [`Config::HistoryDepth`] eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    v24: new StorageType('Staking.ErasValidatorReward', 'Optional', [sts.number()], sts.bigint()) as ErasValidatorRewardV24,
}

/**
 *  The total validator era payout for the last [`Config::HistoryDepth`] eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface ErasValidatorRewardV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (bigint | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (bigint | undefined)][]>
}

export const erasRewardPoints =  {
    /**
     *  Rewards for the last [`Config::HistoryDepth`] eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    v24: new StorageType('Staking.ErasRewardPoints', 'Default', [sts.number()], v24.EraRewardPoints) as ErasRewardPointsV24,
}

/**
 *  Rewards for the last [`Config::HistoryDepth`] eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface ErasRewardPointsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.EraRewardPoints
    get(block: Block, key: number): Promise<(v24.EraRewardPoints | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v24.EraRewardPoints | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v24.EraRewardPoints | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v24.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v24.EraRewardPoints | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v24.EraRewardPoints | undefined)][]>
}

export const erasTotalStake =  {
    /**
     *  The total amount staked for the last [`Config::HistoryDepth`] eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    v24: new StorageType('Staking.ErasTotalStake', 'Default', [sts.number()], sts.bigint()) as ErasTotalStakeV24,
}

/**
 *  The total amount staked for the last [`Config::HistoryDepth`] eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface ErasTotalStakeV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (bigint | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (bigint | undefined)][]>
}

export const forceEra =  {
    /**
     *  Mode of era forcing.
     */
    v24: new StorageType('Staking.ForceEra', 'Default', [], v24.Forcing) as ForceEraV24,
}

/**
 *  Mode of era forcing.
 */
export interface ForceEraV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.Forcing
    get(block: Block): Promise<(v24.Forcing | undefined)>
}

export const slashRewardFraction =  {
    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    v24: new StorageType('Staking.SlashRewardFraction', 'Default', [], v24.Perbill) as SlashRewardFractionV24,
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface SlashRewardFractionV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.Perbill
    get(block: Block): Promise<(v24.Perbill | undefined)>
}

export const canceledSlashPayout =  {
    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    v24: new StorageType('Staking.CanceledSlashPayout', 'Default', [], sts.bigint()) as CanceledSlashPayoutV24,
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface CanceledSlashPayoutV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const unappliedSlashes =  {
    /**
     *  All unapplied slashes that are queued for later.
     */
    v24: new StorageType('Staking.UnappliedSlashes', 'Default', [sts.number()], sts.array(() => v24.UnappliedSlash)) as UnappliedSlashesV24,
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface UnappliedSlashesV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.UnappliedSlash[]
    get(block: Block, key: number): Promise<(v24.UnappliedSlash[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v24.UnappliedSlash[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v24.UnappliedSlash[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v24.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v24.UnappliedSlash[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v24.UnappliedSlash[] | undefined)][]>
}

export const bondedEras =  {
    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    v24: new StorageType('Staking.BondedEras', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))) as BondedErasV24,
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface BondedErasV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block): Promise<([number, number][] | undefined)>
}

export const validatorSlashInEra =  {
    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    v24: new StorageType('Staking.ValidatorSlashInEra', 'Optional', [sts.number(), v24.AccountId32], sts.tuple(() => [v24.Perbill, sts.bigint()])) as ValidatorSlashInEraV24,
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface ValidatorSlashInEraV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v24.AccountId32): Promise<([v24.Perbill, bigint] | undefined)>
    getMany(block: Block, keys: [number, v24.AccountId32][]): Promise<([v24.Perbill, bigint] | undefined)[]>
    getKeys(block: Block): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v24.AccountId32): Promise<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[number, v24.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v24.AccountId32], v: ([v24.Perbill, bigint] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v24.AccountId32], v: ([v24.Perbill, bigint] | undefined)][]>
    getPairs(block: Block, key1: number, key2: v24.AccountId32): Promise<[k: [number, v24.AccountId32], v: ([v24.Perbill, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v24.AccountId32], v: ([v24.Perbill, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v24.AccountId32], v: ([v24.Perbill, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[k: [number, v24.AccountId32], v: ([v24.Perbill, bigint] | undefined)][]>
}

export const nominatorSlashInEra =  {
    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    v24: new StorageType('Staking.NominatorSlashInEra', 'Optional', [sts.number(), v24.AccountId32], sts.bigint()) as NominatorSlashInEraV24,
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface NominatorSlashInEraV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: v24.AccountId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, v24.AccountId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number): Promise<[number, v24.AccountId32][]>
    getKeys(block: Block, key1: number, key2: v24.AccountId32): Promise<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, v24.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[number, v24.AccountId32][]>
    getPairs(block: Block): Promise<[k: [number, v24.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, v24.AccountId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: v24.AccountId32): Promise<[k: [number, v24.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, v24.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, v24.AccountId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: v24.AccountId32): AsyncIterable<[k: [number, v24.AccountId32], v: (bigint | undefined)][]>
}

export const slashingSpans =  {
    /**
     *  Slashing spans for stash accounts.
     */
    v24: new StorageType('Staking.SlashingSpans', 'Optional', [v24.AccountId32], v24.SlashingSpans) as SlashingSpansV24,
}

/**
 *  Slashing spans for stash accounts.
 */
export interface SlashingSpansV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v24.AccountId32): Promise<(v24.SlashingSpans | undefined)>
    getMany(block: Block, keys: v24.AccountId32[]): Promise<(v24.SlashingSpans | undefined)[]>
    getKeys(block: Block): Promise<v24.AccountId32[]>
    getKeys(block: Block, key: v24.AccountId32): Promise<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v24.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<v24.AccountId32[]>
    getPairs(block: Block): Promise<[k: v24.AccountId32, v: (v24.SlashingSpans | undefined)][]>
    getPairs(block: Block, key: v24.AccountId32): Promise<[k: v24.AccountId32, v: (v24.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v24.AccountId32, v: (v24.SlashingSpans | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v24.AccountId32): AsyncIterable<[k: v24.AccountId32, v: (v24.SlashingSpans | undefined)][]>
}

export const spanSlash =  {
    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    v24: new StorageType('Staking.SpanSlash', 'Default', [sts.tuple(() => [v24.AccountId32, sts.number()])], v24.SpanRecord) as SpanSlashV24,
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface SpanSlashV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v24.SpanRecord
    get(block: Block, key: [v24.AccountId32, number]): Promise<(v24.SpanRecord | undefined)>
    getMany(block: Block, keys: [v24.AccountId32, number][]): Promise<(v24.SpanRecord | undefined)[]>
    getKeys(block: Block): Promise<[v24.AccountId32, number][]>
    getKeys(block: Block, key: [v24.AccountId32, number]): Promise<[v24.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v24.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v24.AccountId32, number]): AsyncIterable<[v24.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [v24.AccountId32, number], v: (v24.SpanRecord | undefined)][]>
    getPairs(block: Block, key: [v24.AccountId32, number]): Promise<[k: [v24.AccountId32, number], v: (v24.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v24.AccountId32, number], v: (v24.SpanRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v24.AccountId32, number]): AsyncIterable<[k: [v24.AccountId32, number], v: (v24.SpanRecord | undefined)][]>
}

export const currentPlannedSession =  {
    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    v24: new StorageType('Staking.CurrentPlannedSession', 'Default', [], sts.number()) as CurrentPlannedSessionV24,
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
 */
export interface CurrentPlannedSessionV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const offendingValidators =  {
    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    v24: new StorageType('Staking.OffendingValidators', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), sts.boolean()]))) as OffendingValidatorsV24,
}

/**
 *  Indices of validators that have offended in the active era and whether they are currently
 *  disabled.
 * 
 *  This value should be a superset of disabled validators since not all offences lead to the
 *  validator being disabled (if there was no slash). This is needed to track the percentage of
 *  validators that have offended in the current era, ensuring a new era is forced if
 *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
 *  whether a given validator has previously offended using binary search. It gets cleared when
 *  the era ends.
 */
export interface OffendingValidatorsV24  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, boolean][]
    get(block: Block): Promise<([number, boolean][] | undefined)>
}

export const chillThreshold =  {
    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    v24: new StorageType('Staking.ChillThreshold', 'Optional', [], v24.Percent) as ChillThresholdV24,
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators /
 *  nominators. The threshold is compared to the actual number of validators / nominators
 *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
 */
export interface ChillThresholdV24  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v24.Percent | undefined)>
}
