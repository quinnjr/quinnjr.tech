import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ArticlesService } from 'src/articles/articles.service';
import { ExperiencesService } from 'src/experiences/experiences.service';
import { CertificationsService } from 'src/certifications/certifications.service';
import { EducationService } from 'src/education/education.service';
import { ProjectsService } from 'src/projects/projects.service';

@Module({
  imports: [
    DatabaseModule,
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
