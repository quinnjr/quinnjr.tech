import {
  Args,
  Context,
  Field,
  Int,
  InputType,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Root,
  registerEnumType
} from '@nestjs/graphql';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import kebabCase from 'lodash.kebabcase';

import { SortOrder } from '../enum/sort-order';
import { Public } from '../auth/public.decorator';
import { Article, CreateArticle, UpdateArticle } from './dto/article';
import { User } from '../users/dto/user';
import { DatabaseService } from '../database/database.service';

import { CurrentUser } from '../auth/current-user.decorator';
import { JwtGraphqlAuthGuard } from 'src/auth/jwt-graphql-auth.guard';

@InputType()
class ArticleOrderByUpdatedAtInput {
  @Field((type) => SortOrder)
  updatedAt: SortOrder
}

registerEnumType(SortOrder, {
  name: 'SortOrder'
})
@Resolver(of => Article)
export class ArticlesResolver {
  constructor(
    private readonly $articlesService: ArticlesService,
    private readonly $databaseService: DatabaseService
  ) {}

  @ResolveField('author', returns => User)
  public async getAuthor(@Parent() article: Article): Promise<User | null> {
    return this.$databaseService.article
      .findUnique({
        where: {
          id: article.id
        }
      })
      .author()
  }

  @Query(returns => [Article], { name: 'articles' })
  public async getArticles(
    @Args('searchString', { nullable: true }) searchString: string,
    @Args('take', { type: () => Int, nullable: true }) take: number,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('orderBy', { nullable: true }) orderBy: ArticleOrderByUpdatedAtInput
  ): Promise<Article[]> {
    const or = searchString ? {
      OR: [
        { title: { contains: searchString } },
        { content: { contains: searchString } }
      ]
    } : undefined;

    return this.$databaseService.article.findMany({
      where: or || undefined,
      take: take || undefined,
      skip: skip || undefined,
      orderBy: orderBy || undefined
    })
  }

  @Query(returns => Article, { name: 'article' })
  public async getArticle(@Args('id') id: string): Promise<Article> {
    return this.$databaseService.article.findUnique({
      where: { id }
    });
  }

  @UseGuards(JwtGraphqlAuthGuard)
  @Mutation(returns => Article)
  public async createArticle(
    @CurrentUser() user: User,
    @Args('data') data: CreateArticle
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
  @Mutation(returns => Article)
  public async updateArticle(
    @Args('id') id: string,
    @Args('data') data: UpdateArticle
  ): Promise<Article> {
    return this.$databaseService.article.update({
      where: {
        id
      },
      data: data
    });
  }

  @UseGuards(JwtGraphqlAuthGuard)
  @Mutation(returns => Article, { nullable: true })
  public async deleteArticle(
    @Args('id') id: string
  ): Promise<Article | null> {
    return this.$databaseService.article.delete({
      where: {
        id
      }
    });
  }
}
