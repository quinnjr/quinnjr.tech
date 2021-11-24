import { Test, TestingModule } from '@nestjs/testing';

import { DatabaseService } from '../database/database.service';
import { ProjectsResolver } from './projects.resolver';

describe('ProjectsResolver', () => {
  let resolver: ProjectsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [ProjectsResolver, DatabaseService]
    }).compile();

    resolver = module.get<ProjectsResolver>(ProjectsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
