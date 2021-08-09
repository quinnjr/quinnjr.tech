import { Reflector } from '@nestjs/core';
import { TestingModule, Test } from '@nestjs/testing';
import { JwtGraphqlAuthGuard } from './jwt-graphql-auth.guard';

describe('JwtGraphqlAuthGuard', () => {
  let guard: JwtGraphqlAuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtGraphqlAuthGuard, Reflector]
    }).compile();

    guard = module.get<JwtGraphqlAuthGuard>(JwtGraphqlAuthGuard);
  });
  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
