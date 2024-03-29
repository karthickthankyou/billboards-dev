import { Field, InputType } from '@nestjs/graphql'
import { CampaignStatusType, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AgentRelationFilter } from 'src/models/agents/dto/where.args'
import { CampaignRelationFilter } from 'src/models/campaigns/dto/where.args'

@InputType()
export class CampaignStatusWhereUniqueInput
  implements Required<Prisma.CampaignStatusWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  campaignId: number
}

@InputType()
export class CampaignStatusWhereInput
  implements Required<Prisma.CampaignStatusWhereInput>
{
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => CampaignStatusType, { nullable: true })
  status: CampaignStatusType
  @Field(() => IntFilter, { nullable: true })
  campaignId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  agentId: StringFilter
  @Field(() => CampaignRelationFilter, { nullable: true })
  campaign: CampaignRelationFilter
  @Field(() => AgentRelationFilter, { nullable: true })
  agent: AgentRelationFilter

  @Field(() => [CampaignStatusWhereInput], { nullable: true })
  AND: CampaignStatusWhereInput[]
  @Field(() => [CampaignStatusWhereInput], { nullable: true })
  OR: CampaignStatusWhereInput[]
  @Field(() => [CampaignStatusWhereInput], { nullable: true })
  NOT: CampaignStatusWhereInput[]
}

@InputType()
export class CampaignStatusListRelationFilter {
  @Field(() => CampaignStatusWhereInput)
  every?: CampaignStatusWhereInput
  @Field(() => CampaignStatusWhereInput)
  some?: CampaignStatusWhereInput
  @Field(() => CampaignStatusWhereInput)
  none?: CampaignStatusWhereInput
}

@InputType()
export class CampaignStatusRelationFilter {
  @Field(() => CampaignStatusWhereInput)
  is?: CampaignStatusWhereInput
  @Field(() => CampaignStatusWhereInput)
  isNot?: CampaignStatusWhereInput
}
