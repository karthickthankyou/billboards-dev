import { CreateFavoriteInput } from './create-favorite.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { WhereUniqueInputFavoriteInner } from './find.args'

@InputType()
export class UpdateFavoriteInput extends PartialType(CreateFavoriteInput) {
  @Field(() => WhereUniqueInputFavoriteInner)
  advertiserId_billboardId: WhereUniqueInputFavoriteInner
}
