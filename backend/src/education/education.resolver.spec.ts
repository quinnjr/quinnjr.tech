import { Test, TestingModule } from '@nestjs/testing';

import { DatabaseModule } from '../database/database.module';

import { EducationResolver } from './education.resolver';
import { EducationService } from './education.service';

describe('EducationResolver', () => {
  let resolver: EducationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule
      ],
      providers: [
        EducationResolver,
        EducationService
      ],
    }).compile();

    resolver = module.get<EducationResolver>(EducationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
