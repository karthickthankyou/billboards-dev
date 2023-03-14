import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { AdvertiserOrderByWithRelationInput } from 'src/models/advertisers/dto/orderBy.args'
import { BillboardOrderByWithRelationInput } from 'src/models/billboards/dto/orderBy.args'

@InputType()
export class FavoriteOrderByWithRelationInput
  implements Required<Prisma.FavoriteOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  advertiserId: SortOrder
  @Field(() => SortOrder, { nullable: true })
  billboardId: SortOrder
  @Field(() => AdvertiserOrderByWithRelationInput, { nullable: true })
  advertiser: AdvertiserOrderByWithRelationInput
  @Field(() => BillboardOrderByWithRelationInput, { nullable: true })
  billboard: BillboardOrderByWithRelationInput
  // Todo: Add properties
  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class FavoriteOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
