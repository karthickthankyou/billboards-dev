import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { AdvertiserOrderByWithRelationInput } from 'src/models/advertisers/dto/orderBy.args'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/dto/orderBy.args'
import { CampaignStatusOrderByWithRelationInput } from 'src/models/campaign-statuses/dto/orderBy.args'

@InputType()
export class CampaignOrderByWithRelationInput
  implements Required<Prisma.CampaignOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  id: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  name: SortOrder
  @Field(() => SortOrder, { nullable: true })
  startDate: SortOrder
  @Field(() => SortOrder, { nullable: true })
  endDate: SortOrder
  @Field(() => SortOrder, { nullable: true })
  advertiserId: SortOrder
  @Field(() => AdvertiserOrderByWithRelationInput, { nullable: true })
  advertiser: AdvertiserOrderByWithRelationInput
  @Field(() => BookingOrderByRelationAggregateInput, { nullable: true })
  bookings: BookingOrderByRelationAggregateInput
  @Field(() => CampaignStatusOrderByWithRelationInput, { nullable: true })
  status: CampaignStatusOrderByWithRelationInput

  // Todo: Add properties
  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class CampaignOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
