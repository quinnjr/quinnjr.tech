import { Test, TestingModule } from '@nestjs/testing';

import { DatabaseService } from '../database/database.service';
import { ExperiencesResolver } from './experiences.resolver';

describe('ExperiencesResolver', () => {
  let resolver: ExperiencesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [ExperiencesResolver, DatabaseService]
    }).compile();

    resolver = module.get<ExperiencesResolver>(ExperiencesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
