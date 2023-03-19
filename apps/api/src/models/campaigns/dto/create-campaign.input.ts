import { Field, InputType, PickType } from '@nestjs/graphql'
import { CreateBookingWithoutCampaignIdInput } from 'src/models/bookings/dto/create-booking.input'
import { Campaign } from '../entities/campaign.entity'

@InputType()
export class CreateCampaignInput extends PickType(
  Campaign,
  ['advertiserId', 'startDate', 'endDate', 'name'],
  InputType,
) {
  @Field(() => [CreateBookingWithoutCampaignIdInput])
  bookings: CreateBookingWithoutCampaignIdInput[]
}
