import { ObjectType } from '@nestjs/graphql'
import { Booking as BookingType } from '@prisma/client'

@ObjectType()
export class Booking implements BookingType {
  id: number
  createdAt: Date
  updatedAt: Date
  pricePerDay: number
  campaignId: number
  billboardId: number
}
