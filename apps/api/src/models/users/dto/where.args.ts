import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'
import { AdvertiserRelationFilter } from 'src/models/advertisers/dto/where.args'
import { AgentRelationFilter } from 'src/models/agents/dto/where.args'
import { OwnerRelationFilter } from 'src/models/owners/dto/where.args'

@InputType()
export class UserWhereUniqueInput
  implements Required<Prisma.UserWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
  @Field(() => String, { nullable: true })
  email: string
}

@InputType()
export class UserWhereInput implements Required<Prisma.UserWhereInput> {
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  email: StringFilter
  @Field(() => OwnerRelationFilter, { nullable: true })
  owner: OwnerRelationFilter
  @Field(() => AdvertiserRelationFilter, { nullable: true })
  advertiser: AdvertiserRelationFilter
  @Field(() => AgentRelationFilter, { nullable: true })
  agent: AgentRelationFilter

  @Field(() => [UserWhereInput], { nullable: true })
  AND: UserWhereInput[]
  @Field(() => [UserWhereInput], { nullable: true })
  OR: UserWhereInput[]
  @Field(() => [UserWhereInput], { nullable: true })
  NOT: UserWhereInput[]
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput)
  every?: UserWhereInput
  @Field(() => UserWhereInput)
  some?: UserWhereInput
  @Field(() => UserWhereInput)
  none?: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput)
  is?: UserWhereInput
  @Field(() => UserWhereInput)
  isNot?: UserWhereInput
}
