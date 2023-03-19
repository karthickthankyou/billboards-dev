import { InputType, PartialType, PickType } from '@nestjs/graphql'
import { Campaign } from '../entities/campaign.entity'

@InputType()
export class UpdateCampaignInput extends PartialType(
  PickType(Campaign, ['endDate', 'startDate', 'name'] as const),
  InputType,
) {
  id: Campaign['id']
}
