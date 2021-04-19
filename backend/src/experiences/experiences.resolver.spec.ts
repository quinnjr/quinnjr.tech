import { Test, TestingModule } from '@nestjs/testing';

import { DatabaseModule } from '../database/database.module';

import { ExperiencesResolver } from './experiences.resolver';
import { ExperiencesService } from './experiences.service';

describe('ExperiencesResolver', () => {
  let resolver: ExperiencesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule
      ],
      providers: [
        ExperiencesResolver,
        ExperiencesService
      ],
    }).compile();

    resolver = module.get<ExperiencesResolver>(ExperiencesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
