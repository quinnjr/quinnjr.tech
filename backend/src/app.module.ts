import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { GithubModule } from './github/github.module';
import { ResolversModule } from './resolvers/resolvers.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5 * 60,
      max: 50
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, 'schema.gql'),
      debug: (process.env.NODE_ENV === 'development'),
      playground: (process.env.NODE_ENV === 'development'),
      cors: (process.env.NODE_ENV === 'development'),
      context: ({ req }) => ({ req })
    }),
    GithubModule,
    ResolversModule
  ],
  controllers: [
    AppController
  ],
  providers: [
  ]
})
export class AppModule {}
