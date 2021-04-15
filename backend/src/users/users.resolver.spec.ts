import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, HttpModule } from '@nestjs/common';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

import { ArticlesService } from '../articles/articles.service';
import { CertificationsService } from '../certifications/certifications.service';
import { EducationService } from '../education/education.service';
import { ExperiencesService } from '../experiences/experiences.service';
import { GithubService } from '../github/github.service';
import { ProjectsService } from '../projects/projects.service';
import { DatabaseService } from '../database/database.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule,
        CacheModule.register(),
        HttpModule
      ],
      providers: [
        UsersResolver,
        UsersService,
        DatabaseService,
        ArticlesService,
        CertificationsService,
        EducationService,
        ExperiencesService,
        GithubService,
        ProjectsService
      ]
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
