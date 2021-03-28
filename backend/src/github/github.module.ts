import { CacheModule, HttpModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { GithubService } from './github.service';
import { GithubResolver } from './github.resolver';

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    CacheModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      useFactory: ($configService: ConfigService) => ({
        store: redisStore,
        host: $configService.get<string>('REDIS_HOST'),
        port: 6379,
        max: 50
      })
    })
  ],
  controllers: [
    // GithubController
  ],
  providers: [
    GithubService,
    GithubResolver,
  ],
  exports: [
    GithubService
  ]
})
export class GithubModule {}
