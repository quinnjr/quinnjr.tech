import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

import { ArticlesService } from '../articles/articles.service';
import { CertificationsService } from '../certifications/certifications.service';
import { EducationService } from '../education/education.service';
import { ExperiencesService } from '../experiences/experiences.service';
import { GithubService } from '../github/github.service';
import { ProjectsService } from '../projects/projects.service';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    UsersService,
    UsersResolver,
    ArticlesService,
    CertificationsService,
    EducationService,
    ExperiencesService,
    GithubService,
    ProjectsService
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
