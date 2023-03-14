import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { BillboardStatusOrderByWithRelationInput } from 'src/models/billboard-statuses/dto/orderBy.args'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/dto/orderBy.args'
import { FavoriteOrderByRelationAggregateInput } from 'src/models/favorites/dto/orderBy.args'
import { OwnerOrderByWithRelationInput } from 'src/models/owners/dto/orderBy.args'

@InputType()
export class BillboardOrderByWithRelationInput
  implements Required<Prisma.BillboardOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  id: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  lat: SortOrder
  @Field(() => SortOrder, { nullable: true })
  lng: SortOrder
  @Field(() => SortOrder, { nullable: true })
  height: SortOrder
  @Field(() => SortOrder, { nullable: true })
  width: SortOrder
  @Field(() => SortOrder, { nullable: true })
  pricePerDay: SortOrder
  @Field(() => SortOrder, { nullable: true })
  impressionsPerDay: SortOrder
  @Field(() => SortOrder, { nullable: true })
  minBookingDays: SortOrder
  @Field(() => SortOrder, { nullable: true })
  address: SortOrder
  @Field(() => SortOrder, { nullable: true })
  images: SortOrder
  @Field(() => SortOrder, { nullable: true })
  type: SortOrder
  @Field(() => SortOrder, { nullable: true })
  ownerId: SortOrder
  @Field(() => SortOrder, { nullable: true })
  angle: SortOrder
  @Field(() => SortOrder, { nullable: true })
  elevation: SortOrder
  @Field(() => OwnerOrderByWithRelationInput, { nullable: true })
  owner: OwnerOrderByWithRelationInput
  @Field(() => BookingOrderByRelationAggregateInput, { nullable: true })
  bookings: BookingOrderByRelationAggregateInput
  @Field(() => BillboardStatusOrderByWithRelationInput, { nullable: true })
  status: BillboardStatusOrderByWithRelationInput
  @Field(() => FavoriteOrderByRelationAggregateInput, { nullable: true })
  favorites: FavoriteOrderByRelationAggregateInput
  // Todo: Add properties

  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class BillboardOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
