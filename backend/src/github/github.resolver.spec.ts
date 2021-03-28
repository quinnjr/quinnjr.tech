import { Test, TestingModule } from '@nestjs/testing';
import { GithubResolver } from './github.resolver';

describe('GithubResolver', () => {
  let resolver: GithubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubResolver],
    }).compile();

    resolver = module.get<GithubResolver>(GithubResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
