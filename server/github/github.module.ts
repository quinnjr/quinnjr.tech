import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GithubResolver } from './github.resolver';

@Module({
  imports: [HttpModule],
  providers: [GithubResolver],
  exports: []
})
export class GithubModule {}
