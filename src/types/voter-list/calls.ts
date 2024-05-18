import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const rebag =  {
    name: 'VoterList.rebag',
    /**
     * See [`Pallet::rebag`].
     */
    v24: new CallType(
        'VoterList.rebag',
        sts.struct({
            dislocated: v24.MultiAddress,
        })
    ),
}

export const putInFrontOf =  {
    name: 'VoterList.put_in_front_of',
    /**
     * See [`Pallet::put_in_front_of`].
     */
    v24: new CallType(
        'VoterList.put_in_front_of',
        sts.struct({
            lighter: v24.MultiAddress,
        })
    ),
}

export const putInFrontOfOther =  {
    name: 'VoterList.put_in_front_of_other',
    /**
     * See [`Pallet::put_in_front_of_other`].
     */
    v24: new CallType(
        'VoterList.put_in_front_of_other',
        sts.struct({
            heavier: v24.MultiAddress,
            lighter: v24.MultiAddress,
        })
    ),
}
