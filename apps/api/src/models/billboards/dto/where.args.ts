import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { BillboardType, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'
import { BillboardStatusRelationFilter } from 'src/models/billboard-statuses/dto/where.args'
import { BookingListRelationFilter } from 'src/models/bookings/dto/where.args'
import { FavoriteListRelationFilter } from 'src/models/favorites/dto/where.args'
import { OwnerRelationFilter } from 'src/models/owners/dto/where.args'

@InputType()
export class BillboardWhereUniqueInput
  implements Required<Prisma.BillboardWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

registerEnumType(BillboardType, {
  name: 'BillboardType',
})

@InputType()
export class BillboardWhereInput
  implements Required<Prisma.BillboardWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  lat: IntFilter
  @Field(() => IntFilter, { nullable: true })
  lng: IntFilter
  @Field(() => IntFilter, { nullable: true })
  height: IntFilter
  @Field(() => IntFilter, { nullable: true })
  width: IntFilter
  @Field(() => IntFilter, { nullable: true })
  pricePerDay: IntFilter
  @Field(() => IntFilter, { nullable: true })
  impressionsPerDay: IntFilter
  @Field(() => IntFilter, { nullable: true })
  minBookingDays: IntFilter
  @Field(() => StringFilter, { nullable: true })
  address: StringFilter
  @Field(() => StringListFilter, { nullable: true })
  images: StringListFilter
  @Field(() => BillboardType, { nullable: true })
  type: BillboardType
  @Field(() => StringFilter, { nullable: true })
  ownerId: StringFilter
  @Field(() => IntFilter, { nullable: true })
  angle: IntFilter
  @Field(() => IntFilter, { nullable: true })
  elevation: IntFilter
  @Field(() => OwnerRelationFilter, { nullable: true })
  owner: OwnerRelationFilter
  @Field(() => BookingListRelationFilter, { nullable: true })
  bookings: BookingListRelationFilter
  @Field(() => BillboardStatusRelationFilter, { nullable: true })
  status: BillboardStatusRelationFilter
  @Field(() => FavoriteListRelationFilter, { nullable: true })
  favorites: FavoriteListRelationFilter

  @Field(() => [BillboardWhereInput], { nullable: true })
  AND: BillboardWhereInput[]
  @Field(() => [BillboardWhereInput], { nullable: true })
  OR: BillboardWhereInput[]
  @Field(() => [BillboardWhereInput], { nullable: true })
  NOT: BillboardWhereInput[]
}

@InputType()
export class BillboardListRelationFilter {
  @Field(() => BillboardWhereInput)
  every?: BillboardWhereInput
  @Field(() => BillboardWhereInput)
  some?: BillboardWhereInput
  @Field(() => BillboardWhereInput)
  none?: BillboardWhereInput
}

@InputType()
export class BillboardRelationFilter {
  @Field(() => BillboardWhereInput)
  is?: BillboardWhereInput
  @Field(() => BillboardWhereInput)
  isNot?: BillboardWhereInput
}
