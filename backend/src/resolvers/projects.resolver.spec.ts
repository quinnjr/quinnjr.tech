import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { ProjectsResolver } from './projects.resolver';

describe('ProjectsResolver', () => {
  let resolver: ProjectsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule
      ],
      providers: [
        ProjectsResolver
      ],
    }).compile();

    resolver = module.get<ProjectsResolver>(ProjectsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
