import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  BillboardStatus as BillboardStatusObjectType,
  BillboardStatusType,
} from '@prisma/client'

registerEnumType(BillboardStatusType, {
  name: 'BillboardStatusType',
})

@ObjectType()
export class BillboardStatus implements BillboardStatusObjectType {
  createdAt: Date
  updatedAt: Date
  notes: string
  @Field(() => BillboardStatusType)
  status: BillboardStatusType
  billboardId: number
  agentId: string
}
