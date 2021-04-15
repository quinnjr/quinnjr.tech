import { CacheModule, HttpModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { GithubResolver } from './github.resolver';
import { GithubService } from './github.service';

describe('GithubResolver', () => {
  let resolver: GithubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule,
        HttpModule,
        CacheModule.registerAsync({
          imports: [ ConfigModule ],
          inject: [ ConfigService ],
          useFactory: ($configService: ConfigService) => ({
            max: 50
          })
        })
      ],
      providers: [
        GithubResolver,
        GithubService
      ],
    }).compile();

    resolver = module.get<GithubResolver>(GithubResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
