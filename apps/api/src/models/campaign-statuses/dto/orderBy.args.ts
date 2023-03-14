import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { AgentOrderByWithRelationInput } from 'src/models/agents/dto/orderBy.args'
import { CampaignOrderByWithRelationInput } from 'src/models/campaigns/dto/orderBy.args'

@InputType()
export class CampaignStatusOrderByWithRelationInput
  implements Required<Prisma.CampaignStatusOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  status: SortOrder
  @Field(() => SortOrder, { nullable: true })
  campaignId: SortOrder
  @Field(() => SortOrder, { nullable: true })
  agentId: SortOrder
  @Field(() => CampaignOrderByWithRelationInput, { nullable: true })
  campaign: CampaignOrderByWithRelationInput
  @Field(() => AgentOrderByWithRelationInput, { nullable: true })
  agent: AgentOrderByWithRelationInput
}

@InputType()
export class CampaignStatusOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
