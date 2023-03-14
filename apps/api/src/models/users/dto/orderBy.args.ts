import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { AdvertiserOrderByWithRelationInput } from 'src/models/advertisers/dto/orderBy.args'
import { AgentOrderByWithRelationInput } from 'src/models/agents/dto/orderBy.args'
import { OwnerOrderByWithRelationInput } from 'src/models/owners/dto/orderBy.args'

@InputType()
export class UserOrderByWithRelationInput
  implements Required<Prisma.UserOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  uid: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  email: SortOrder
  @Field(() => OwnerOrderByWithRelationInput, { nullable: true })
  owner: OwnerOrderByWithRelationInput
  @Field(() => AdvertiserOrderByWithRelationInput, { nullable: true })
  advertiser: AdvertiserOrderByWithRelationInput
  @Field(() => AgentOrderByWithRelationInput, { nullable: true })
  agent: AgentOrderByWithRelationInput
  // Todo: Add properties
  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
