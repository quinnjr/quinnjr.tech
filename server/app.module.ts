import { join } from 'path';

import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { HttpModule } from '@nestjs/axios';

import { AppServerModule } from '../src/main.server';

import { DatabaseService } from './database/database.service';
import { ArticlesResolver } from './articles/articles.resolver';
import { CertificationsResolver } from './certifications/certifications.resolver';
import { EducationResolver } from './education/education.resolver';
import { ExperiencesResolver } from './experiences/experiences.resolver';
import { ProjectsResolver } from './projects/projects.resolver';
import { UsersResolver } from './users/users.resolver';
import { GithubModule } from './github/github.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/quinnjr.tech/browser')
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    }),
    CacheModule.register({
      ttl: 5 * 60,
      max: 50
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(__dirname, 'schema.gql'),
      debug: process.env['ENV'] === 'development',
      cors: process.env['ENV'] === 'development',
      context: ({ req }: { req: any }) => ({ req })
    })
  ],
  controllers: [],
  providers: [
    DatabaseService,
    ArticlesResolver,
    CertificationsResolver,
    EducationResolver,
    ExperiencesResolver,
    ProjectsResolver,
    UsersResolver,
    GithubModule
  ]
})
export class AppModule {}
