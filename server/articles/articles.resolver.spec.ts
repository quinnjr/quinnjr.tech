import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from '../database/database.service';
import { ArticlesResolver } from './articles.resolver';

describe('ArticlesResolver', () => {
  let resolver: ArticlesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [ArticlesResolver, DatabaseService]
    }).compile();

    resolver = module.get<ArticlesResolver>(ArticlesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
