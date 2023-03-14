import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputUid } from 'src/common/dtos/common.input'
import { OwnerOrderByWithRelationInput } from './orderBy.args'
import { OwnerWhereInput, OwnerWhereUniqueInput } from './where.args'

registerEnumType(Prisma.OwnerScalarFieldEnum, {
  name: 'OwnerScalarFieldEnum',
})

@ArgsType()
export class FindManyOwnerArgs
  implements Required<Omit<Prisma.OwnerFindManyArgs, 'include' | 'select'>>
{
  @Field(() => OwnerWhereInput, { nullable: true })
  where: OwnerWhereInput
  @Field(() => [OwnerOrderByWithRelationInput], { nullable: true })
  orderBy: OwnerOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputUid, { nullable: true })
  cursor: WhereUniqueInputUid
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.OwnerScalarFieldEnum], { nullable: true })
  distinct: Prisma.OwnerScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueOwnerArgs {
  @Field({ nullable: true })
  where: OwnerWhereUniqueInput
}
