import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { BillboardStatusOrderByRelationAggregateInput } from 'src/models/billboard-statuses/dto/orderBy.args'
import { CampaignStatusOrderByRelationAggregateInput } from 'src/models/campaign-statuses/dto/orderBy.args'
import { UserOrderByWithRelationInput } from 'src/models/users/dto/orderBy.args'

@InputType()
export class AgentOrderByWithRelationInput
  implements Required<Prisma.AgentOrderByWithRelationInput>
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
  @Field(() => BillboardStatusOrderByRelationAggregateInput, { nullable: true })
  billboardsStatuses: BillboardStatusOrderByRelationAggregateInput
  @Field(() => CampaignStatusOrderByRelationAggregateInput, { nullable: true })
  campaignsStatuses: CampaignStatusOrderByRelationAggregateInput
}

@InputType()
export class AgentOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
