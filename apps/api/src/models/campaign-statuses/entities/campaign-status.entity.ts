import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  CampaignStatus as CampaignStatusObjectType,
  CampaignStatusType,
} from '@prisma/client'

registerEnumType(CampaignStatusType, {
  name: 'CampaignStatusType',
})

@ObjectType()
export class CampaignStatus implements CampaignStatusObjectType {
  createdAt: Date
  updatedAt: Date
  @Field(() => CampaignStatusType)
  status: CampaignStatusType
  campaignId: number
  agentId: string
}
