import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { BillboardOrderByWithRelationInput } from 'src/models/billboards/dto/orderBy.args'
import { CampaignOrderByWithRelationInput } from 'src/models/campaigns/dto/orderBy.args'

@InputType()
export class BookingOrderByWithRelationInput
  implements Required<Prisma.BookingOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  id: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  pricePerDay: SortOrder
  @Field(() => SortOrder, { nullable: true })
  campaignId: SortOrder
  @Field(() => SortOrder, { nullable: true })
  billboardId: SortOrder
  @Field(() => CampaignOrderByWithRelationInput, { nullable: true })
  campaign: CampaignOrderByWithRelationInput
  @Field(() => BillboardOrderByWithRelationInput, { nullable: true })
  billboard: BillboardOrderByWithRelationInput
}

@InputType()
export class BookingOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
