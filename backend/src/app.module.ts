import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { DatabaseModule } from './database/database.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { EducationModule } from './education/education.module';
import { CertificationsModule } from './certifications/certifications.module';
import { ProjectsModule } from './projects/projects.module';
import { GithubModule } from './github/github.module';

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
      debug: false,
      playground: (process.env.NODE_ENV === 'development'),
      cors: (process.env.NODE_ENV === 'development')
    }),
    AuthModule,
    ArticlesModule,
    DatabaseModule,
    UsersModule,
    ExperiencesModule,
    EducationModule,
    CertificationsModule,
    ProjectsModule,
    GithubModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor
    // }
  ]
})
export class AppModule {}
