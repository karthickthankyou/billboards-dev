import { InputType, PickType } from '@nestjs/graphql'
import { Billboard } from '../entities/billboard.entity'

@InputType()
export class CreateBillboardInput extends PickType(
  Billboard,
  [
    'address',
    'angle',
    'elevation',
    'height',
    'width',
    'images',
    'impressionsPerDay',
    'lat',
    'lng',
    'minBookingDays',
    'type',
    'ownerId',
  ],
  InputType,
) {}
