import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubResolver } from './github.resolver';

@Module({
  imports: [
    ConfigModule,
    CacheModule.register({
      ttl: 5 * 60
    })
  ],
  providers: [GithubResolver],
  exports: []
})
export class GithubModule {}
