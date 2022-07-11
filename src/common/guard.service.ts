import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { CognitoJwtVerifier } from "aws-jwt-verify";

const verifier = CognitoJwtVerifier.create({
    userPoolId: process.env.POOLID,
    clientId: process.env.CLIENTID,
    tokenUse: "access",
});

@Injectable()
export class MyGuard implements CanActivate {
  private arrowPaths = ["/apis/~"];

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    if(this.arrowPaths.includes(request.originalUrl)) return true;

    const token = request.header("authorization") as string;

    try {
        const payload = await verifier.verify(token);

        request[process.env.CUSTOM_PROPERTY] = payload.sub;
        
        return true;
    }catch(err) {
        console.log("DEBUG error message === ", err)
        throw new UnauthorizedException();
    }
  }
}