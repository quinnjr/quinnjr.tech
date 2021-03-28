import { Controller, Get } from '@nestjs/common';

import { Public } from './auth/public.decorator';

@Controller('')
export class AppController {
  constructor() {}

  @Public()
  @Get('/')
  index(): string {
    return 'here be dragons';
  }
}
