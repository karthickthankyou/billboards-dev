import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { BillboardOrderByRelationAggregateInput } from 'src/models/billboards/dto/orderBy.args'
import { UserOrderByWithRelationInput } from 'src/models/users/dto/orderBy.args'

@InputType()
export class OwnerOrderByWithRelationInput
  implements Required<Prisma.OwnerOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  uid: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  name: SortOrder
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user: UserOrderByWithRelationInput
  @Field(() => BillboardOrderByRelationAggregateInput, { nullable: true })
  billboards: BillboardOrderByRelationAggregateInput
  // Todo: Add properties
  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class OwnerOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
