import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IdDecorator = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    const uid = request[process.env.CUSTOM_PROPERTY] as string
    return uid;
  },
);