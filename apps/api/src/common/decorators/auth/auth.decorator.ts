import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from 'src/common/guards/auth/auth.guard'
import { Role } from 'src/common/types'

export const AllowAuthenticated = (...roles: Role[]) =>
  applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard))

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context = GqlExecutionContext.create(ctx)
    const user = context.getContext().req.user
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  },
)
