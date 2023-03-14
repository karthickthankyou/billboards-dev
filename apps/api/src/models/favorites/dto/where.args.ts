import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AdvertiserRelationFilter } from 'src/models/advertisers/dto/where.args'
import { BillboardRelationFilter } from 'src/models/billboards/dto/where.args'
import { WhereUniqueInputFavoriteInner } from './find.args'

@InputType()
export class FavoriteWhereUniqueInput
  implements Required<Prisma.FavoriteWhereUniqueInput>
{
  @Field(() => WhereUniqueInputFavoriteInner)
  advertiserId_billboardId: WhereUniqueInputFavoriteInner
}

@InputType()
export class FavoriteWhereInput implements Required<Prisma.FavoriteWhereInput> {
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  advertiserId: StringFilter
  @Field(() => IntFilter, { nullable: true })
  billboardId: IntFilter
  @Field(() => AdvertiserRelationFilter, { nullable: true })
  advertiser: AdvertiserRelationFilter
  @Field(() => BillboardRelationFilter, { nullable: true })
  billboard: BillboardRelationFilter
  // @Field(() => StringFilter, { nullable: true })
  // uid: StringFilter

  @Field(() => [FavoriteWhereInput], { nullable: true })
  AND: FavoriteWhereInput[]
  @Field(() => [FavoriteWhereInput], { nullable: true })
  OR: FavoriteWhereInput[]
  @Field(() => [FavoriteWhereInput], { nullable: true })
  NOT: FavoriteWhereInput[]
}

@InputType()
export class FavoriteListRelationFilter {
  @Field(() => FavoriteWhereInput)
  every?: FavoriteWhereInput
  @Field(() => FavoriteWhereInput)
  some?: FavoriteWhereInput
  @Field(() => FavoriteWhereInput)
  none?: FavoriteWhereInput
}

@InputType()
export class FavoriteRelationFilter {
  @Field(() => FavoriteWhereInput)
  is?: FavoriteWhereInput
  @Field(() => FavoriteWhereInput)
  isNot?: FavoriteWhereInput
}
