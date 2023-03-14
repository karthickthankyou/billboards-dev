import { InputType, PickType } from '@nestjs/graphql'
import { Campaign } from '../entities/campaign.entity'

@InputType()
export class CreateCampaignInput extends PickType(
  Campaign,
  ['advertiserId', 'startDate', 'endDate', 'name'],
  InputType,
) {}
