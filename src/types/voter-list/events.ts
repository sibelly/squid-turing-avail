import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v24 from '../v24'

export const rebagged =  {
    name: 'VoterList.Rebagged',
    /**
     * Moved an account from one bag to another.
     */
    v24: new EventType(
        'VoterList.Rebagged',
        sts.struct({
            who: v24.AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        })
    ),
}

export const scoreUpdated =  {
    name: 'VoterList.ScoreUpdated',
    /**
     * Updated the score of some account to the given amount.
     */
    v24: new EventType(
        'VoterList.ScoreUpdated',
        sts.struct({
            who: v24.AccountId32,
            newScore: sts.bigint(),
        })
    ),
}
