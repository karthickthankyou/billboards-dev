import { ObjectType } from '@nestjs/graphql'
import { User as UserType } from '@prisma/client'

@ObjectType()
export class User implements UserType {
  uid: string
  createdAt: Date
  updatedAt: Date
  email: string
  // Todo fill all properties
}
