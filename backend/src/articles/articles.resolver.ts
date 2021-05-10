import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { UsersService } from '../users/users.service';
import { Public } from '../auth/public.decorator';
import { Article, CreateArticle, UpdateArticle } from './dto/article';
import { User } from '../users/dto/user';

import { ArticlesService } from './articles.service';

import { ArticleWhereInput } from './dto/article-where-input';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtGraphqlAuthGuard } from 'src/auth/jwt-graphql-auth.guard';

@Resolver(of => Article)
export class ArticlesResolver {
  constructor(
    private readonly $articlesService: ArticlesService,
    private readonly $usersService: UsersService
  ) {}

  @Query(returns => [Article], { name: 'articles' })
  public async getArticles(
    // @Args('where') where?: ArticleWhereInput,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
    // @Args('orderBy') orderBy?: Prisma.ArticleOrderByInput
  ): Promise<Article[]> {
    const params = { take, skip };
    return this.$articlesService.findMany(params);
  }

  @Query(returns => Article, { name: 'article' })
  public async getArticle(@Args('id') id: string): Promise<Article> {
    return this.$articlesService.findOne({ where: {id} });
  }

  @ResolveField('author', returns => User)
  public async getAuthor(@Parent() article: Article): Promise<User> {
    const { authorId } = article;
    return this.$usersService.findOne({
      where: {
        id: authorId
      }
    });
  }

  @UseGuards(JwtGraphqlAuthGuard)
  @Mutation(returns => Article)
  public async createArticle(
    @CurrentUser() user: User,
    @Args('data') data: CreateArticle
  ): Promise<Article> {
    Object.defineProperty(data, 'author', {
      value: {
        connect: {
          id: user.id
        }
      },
      enumerable: true
    });
    return this.$articlesService.create(data as unknown as Prisma.ArticleCreateInput);
  }

  @UseGuards(JwtGraphqlAuthGuard)
  @Mutation(returns => Article)
  public async updateArticle(
    @Args('id') id: string,
    @Args('data') data: UpdateArticle
  ): Promise<Article> {
    return this.$articlesService.update(id, data);
  }
}
