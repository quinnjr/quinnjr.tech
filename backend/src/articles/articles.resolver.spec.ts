import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users/users.service';
import { DatabaseModule } from '../database/database.module';
import { ArticlesResolver } from './articles.resolver';
import { ArticlesService } from './articles.service';

describe('ArticlesResolver', () => {
  let resolver: ArticlesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule,
      ],
      providers: [
        ArticlesResolver,
        ArticlesService,
        UsersService
      ],
    }).compile();

    resolver = module.get<ArticlesResolver>(ArticlesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
