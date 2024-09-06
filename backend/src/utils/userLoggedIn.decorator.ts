import { ExecutionContext, createParamDecorator } from '@nestjs/common';
export const UserLoggedIn = createParamDecorator(
  (data: string | string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: any = request['user'];
    return data ? user[data] : user;
  },
);
