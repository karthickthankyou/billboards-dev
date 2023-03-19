import { Field, Float, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  Billboard as BillboardObjectType,
  BillboardStatusType,
  BillboardType,
} from '@prisma/client'

registerEnumType(BillboardStatusType, {
  name: 'BillboardStatusType',
})

@ObjectType()
export class Billboard implements BillboardObjectType {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field(() => Float)
  lat: number
  @Field(() => Float)
  lng: number
  height: number
  width: number
  pricePerDay: number
  impressionsPerDay: number
  minBookingDays: number
  address: string
  images: string[]
  @Field(() => BillboardType)
  type: BillboardType
  @Field(() => String)
  ownerId: string
  angle: number
  elevation: number
  // Todo fill all properties
}
