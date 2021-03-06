import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') implements CanActivate {
  public override canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
