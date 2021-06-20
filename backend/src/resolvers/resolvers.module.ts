import { HttpModule, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { ArticlesResolver } from './articles.resolver';
import { CertificationsResolver } from './certifications.resolver';
import { EducationResolver } from './education.resolver';
import { ExperiencesResolver } from './experiences.resolver';
import { ProjectsResolver } from './projects.resolver';
import { UsersResolver } from '../resolvers/users.resolver';

import { GithubModule } from '../github/github.module';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    GithubModule,
  ],
  providers: [
    ArticlesResolver,
    CertificationsResolver,
    EducationResolver,
    ExperiencesResolver,
    ProjectsResolver,
    UsersResolver
  ],
  exports: [
  ]
})
export class ResolversModule {}
