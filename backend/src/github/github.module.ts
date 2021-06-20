import { CacheModule, HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubService } from './github.service';
import { GithubResolver } from './github.resolver';

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    CacheModule.register({
      ttl: 5 * 60
    })
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
