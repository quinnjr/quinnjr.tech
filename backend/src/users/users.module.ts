import { HttpModule, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

import { ArticlesService } from '../articles/articles.service';
import { CertificationsService } from '../certifications/certifications.service';
import { EducationService } from '../education/education.service';
import { ExperiencesService } from '../experiences/experiences.service';
import { ProjectsService } from '../projects/projects.service';
import { GithubModule } from 'src/github/github.module';

@Module({
  imports: [
    DatabaseModule,
    GithubModule
  ],
  providers: [
    UsersService,
    UsersResolver,
    ArticlesService,
    CertificationsService,
    EducationService,
    ExperiencesService,
    ProjectsService
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
