import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const palletId =  {
    /**
     *  The nomination pool's pallet id.
     */
    v24: new ConstantType(
        'NominationPools.PalletId',
        v24.PalletId
    ),
}

export const maxPointsToBalance =  {
    /**
     *  The maximum pool points-to-balance ratio that an `open` pool can have.
     * 
     *  This is important in the event slashing takes place and the pool's points-to-balance
     *  ratio becomes disproportional.
     * 
     *  Moreover, this relates to the `RewardCounter` type as well, as the arithmetic operations
     *  are a function of number of points, and by setting this value to e.g. 10, you ensure
     *  that the total number of points in the system are at most 10 times the total_issuance of
     *  the chain, in the absolute worse case.
     * 
     *  For a value of 10, the threshold would be a pool points-to-balance ratio of 10:1.
     *  Such a scenario would also be the equivalent of the pool being 90% slashed.
     */
    v24: new ConstantType(
        'NominationPools.MaxPointsToBalance',
        sts.number()
    ),
}

export const maxUnbonding =  {
    /**
     *  The maximum number of simultaneous unbonding chunks that can exist per member.
     */
    v24: new ConstantType(
        'NominationPools.MaxUnbonding',
        sts.number()
    ),
}
