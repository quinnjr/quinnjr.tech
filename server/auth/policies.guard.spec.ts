import { Reflector } from '@nestjs/core';
import { TestingModule, Test } from '@nestjs/testing';
import { AbilityFactory } from './ability.factory';
import { PoliciesGuard } from './policies.guard';

describe('PoliciesGuard', () => {
  let guard: PoliciesGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoliciesGuard, Reflector, AbilityFactory]
    }).compile();

    guard = module.get<PoliciesGuard>(PoliciesGuard);
  });
  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
