import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';

// import { GithubModule } from './github/github.module';
import { DatabaseService } from './database/database.service';
import { ArticlesResolver } from './articles/articles.resolver';
import { CertificationsResolver } from './certifications/certifications.resolver';
import { EducationResolver } from './education/education.resolver';
import { ExperiencesResolver } from './experiences/experiences.resolver';
import { ProjectsResolver } from './projects/projects.resolver';
import { UsersResolver } from './users/users.resolver';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/frontend/browser')
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    }),
    CacheModule.register({
      ttl: 5 * 60,
      max: 50
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, 'schema.gql'),
      debug: process.env.ENV === 'development',
      cors: process.env.ENV === 'development',
      context: ({ req }) => ({ req })
    }),
    // GithubModule
  ],
  controllers: [],
  providers: [
    DatabaseService,
    ArticlesResolver,
    CertificationsResolver,
    EducationResolver,
    ExperiencesResolver,
    ProjectsResolver,
    UsersResolver
  ]
})
export class AppModule {}
