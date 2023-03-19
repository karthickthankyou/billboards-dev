import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { CampaignOrderByRelationAggregateInput } from 'src/models/campaigns/dto/orderBy.args'
import { FavoriteOrderByRelationAggregateInput } from 'src/models/favorites/dto/orderBy.args'

@InputType()
export class AdvertiserOrderByWithRelationInput
  implements Required<Prisma.AdvertiserOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  uid: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  name: SortOrder
  @Field(() => CampaignOrderByRelationAggregateInput, { nullable: true })
  campaigns: CampaignOrderByRelationAggregateInput
  @Field(() => FavoriteOrderByRelationAggregateInput, { nullable: true })
  Favorite: FavoriteOrderByRelationAggregateInput
}

@InputType()
export class AdvertiserOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
