import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { AgentOrderByWithRelationInput } from 'src/models/agents/dto/orderBy.args'
import { BillboardOrderByWithRelationInput } from 'src/models/billboards/dto/orderBy.args'

@InputType()
export class BillboardStatusOrderByWithRelationInput
  implements Required<Prisma.BillboardStatusOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  notes: SortOrder
  @Field(() => SortOrder, { nullable: true })
  status: SortOrder
  @Field(() => SortOrder, { nullable: true })
  billboardId: SortOrder
  @Field(() => SortOrder, { nullable: true })
  agentId: SortOrder
  @Field(() => BillboardOrderByWithRelationInput, { nullable: true })
  billboard: BillboardOrderByWithRelationInput
  @Field(() => AgentOrderByWithRelationInput, { nullable: true })
  agent: AgentOrderByWithRelationInput
  // Todo: Add properties
  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class BillboardStatusOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
