import { Test, TestingModule } from '@nestjs/testing';

import { DatabaseService } from '../database/database.service';
import { EducationResolver } from './education.resolver';

describe('EducationResolver', () => {
  let resolver: EducationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [EducationResolver, DatabaseService]
    }).compile();

    resolver = module.get<EducationResolver>(EducationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
