import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly $authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  public async login(@Request() req): Promise<any> {
    return this.$authService.login(req.user);
  }

  @HttpCode(200)
  @Post('refresh-token')
  public async refreshToken(@Request() req): Promise<any> {
    return '';
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('can-access')
  public async canAccess(
    @Request() req: any,
    @Body() body: { role: string }
  ): Promise<boolean> {
    if(!req.user) {
      return false;
    }

    return req.user.role === body.role;
  }
}
