import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, IntColumn as IntColumn_, StringColumn as StringColumn_, BooleanColumn as BooleanColumn_, DateTimeColumn as DateTimeColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"

@Index_(["height", "id"], {unique: true})
@Index_(["height", "finalized"], {unique: true})
@Entity_()
export class Block {
    constructor(props?: Partial<Block>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_({unique: true})
    @IntColumn_({nullable: false})
    height!: number

    @Index_({unique: true})
    @StringColumn_({nullable: false})
    hash!: string

    @StringColumn_({nullable: false})
    author!: string

    @StringColumn_({nullable: false})
    stateRoot!: string

    @StringColumn_({nullable: false})
    parentHash!: string

    @StringColumn_({nullable: false})
    extrinsicRoot!: string

    @Index_()
    @BooleanColumn_({nullable: false})
    finalized!: boolean

    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @DateTimeColumn_({nullable: true})
    processorTimestamp!: Date | undefined | null

    @OneToMany_(() => Account, e => e.block)
    accounts!: Account[]
}
