import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import kebabCase from 'lodash.kebabcase';

import { Public } from '../auth/public.decorator';
import { DatabaseService } from '../database/database.service';

import { CurrentUser } from '../auth/current-user.decorator';
import { JwtGraphqlAuthGuard } from '../auth/jwt-graphql-auth.guard';

import { Article } from '../@generated/prisma-nestjs-graphql/article/article.model';
import { ArticleOrderByWithRelationInput } from 'server/@generated/prisma-nestjs-graphql/article';
import { ArticleUpdateInput } from '../@generated/prisma-nestjs-graphql/article/article-update.input';
import { ArticleCreateInput } from '../@generated/prisma-nestjs-graphql/article/article-create.input';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';

@Resolver((of: any) => Article)
export class ArticlesResolver {
  constructor(private readonly $databaseService: DatabaseService) {}

  @ResolveField('author', (returns) => User)
  public async getAuthor(@Parent() article: Article): Promise<User | null> {
    return this.$databaseService.article
      .findUnique({
        where: {
          id: article.id
        }
      })
      .author();
  }

  @Query((returns) => [Article], { name: 'articles' })
  public async getArticles(
    @Args('searchString', { nullable: true }) searchString: string,
    @Args('take', { type: () => Int, nullable: true }) take: number,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('orderBy', { nullable: true })
    orderBy: ArticleOrderByWithRelationInput
  ): Promise<Article[]> {
    const or = searchString
      ? {
          OR: [
            { title: { contains: searchString } },
            { content: { contains: searchString } }
          ]
        }
      : undefined;

    return this.$databaseService.article.findMany({
      where: or,
      take,
      skip,
      orderBy
    });
  }

  @Query((returns) => Article, { name: 'article' })
  public async getArticle(@Args('id') id: string): Promise<Article | null> {
    return this.$databaseService.article.findUnique({
      where: { id }
    });
  }

  @UseGuards(JwtGraphqlAuthGuard)
  @Mutation((returns) => Article)
  public async createArticle(
    @CurrentUser() user: User,
    @Args('data') data: ArticleCreateInput
  ): Promise<Article> {
    return this.$databaseService.article.create({
      data: {
        title: data.title,
        titleSlug: kebabCase(data.title),
        description: data.description,
        content: data.content,
        author: {
          connect: { id: user.id }
        }
      }
    });
  }

  @UseGuards(JwtGraphqlAuthGuard)
  @Mutation((returns) => Article)
  public async updateArticle(
    @Args('id') id: string,
    @Args('data') data: ArticleUpdateInput
  ): Promise<Article> {
    return this.$databaseService.article.update({
      where: {
        id
      },
      data
    });
  }

  @UseGuards(JwtGraphqlAuthGuard)
  @Mutation((returns) => Article, { nullable: true })
  public async deleteArticle(@Args('id') id: string): Promise<Article | null> {
    return this.$databaseService.article.delete({
      where: {
        id
      }
    });
  }
}
