import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly $authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @HttpCode(200)
  @Post('login')
  public async login(@Request() req): Promise<any> {
    return this.$authService.login(req.user);
  }
}
