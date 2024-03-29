import { ArgsType, Field, InputType, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BillboardStatusOrderByWithRelationInput } from './orderBy.args'
import {
  BillboardStatusWhereInput,
  BillboardStatusWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.BillboardStatusScalarFieldEnum, {
  name: 'BillboardStatusScalarFieldEnum',
})

@InputType()
export class WhereUniqueInputBillboardId {
  @Field(() => Number, { nullable: true })
  billboardId: number
}

@ArgsType()
export class FindManyBillboardStatusArgs
  implements
    Required<Omit<Prisma.BillboardStatusFindManyArgs, 'include' | 'select'>>
{
  @Field(() => BillboardStatusWhereInput, { nullable: true })
  where: BillboardStatusWhereInput
  @Field(() => [BillboardStatusOrderByWithRelationInput], { nullable: true })
  orderBy: BillboardStatusOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputBillboardId, { nullable: true })
  cursor: WhereUniqueInputBillboardId
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.BillboardStatusScalarFieldEnum], { nullable: true })
  distinct: Prisma.BillboardStatusScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueBillboardStatusArgs {
  @Field({ nullable: true })
  where: BillboardStatusWhereUniqueInput
}
