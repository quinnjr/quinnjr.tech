import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { EducationResolver } from './education.resolver';

describe('EducationResolver', () => {
  let resolver: EducationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule
      ],
      providers: [
        EducationResolver
      ],
    }).compile();

    resolver = module.get<EducationResolver>(EducationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
