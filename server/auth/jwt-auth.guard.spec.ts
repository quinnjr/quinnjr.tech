import { Reflector } from '@nestjs/core';
import { TestingModule, Test } from '@nestjs/testing';
import { AuthModule } from './auth.module';
import { JwtAuthGuard } from './jwt-auth.guard';

describe('JwtAuthGuard', () => {
  let guard: JwtAuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      providers: [JwtAuthGuard, Reflector]
    }).compile();

    guard = module.get<JwtAuthGuard>(JwtAuthGuard);
  });
  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
