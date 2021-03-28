import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { DatabaseService } from '../database/database.service';
import { Article } from './dto/article';

@Injectable()
export class ArticlesService {
  constructor(
    private $database: DatabaseService
  ) {}

  public async findOne(params: {
    where: Prisma.ArticleWhereUniqueInput
  }): Promise<Article | null> {
    return this.$database.article.findUnique(params);
  }

  public async findMany(params: {
    where?: Prisma.ArticleWhereInput;
    // limit?: number;
    skip?: number;
  } = {}): Promise<Article[] | null> {
    return this.$database.article.findMany(params);
  }

  public async create(data: Prisma.ArticleCreateInput): Promise<Article> {
    return this.$database.article.create({data})
  }

  public async update(id: string, data: Prisma.ArticleUpdateInput): Promise<Article> {
    return this.$database.article.update({
      where: { id },
      data
    });
  }

  public async delete(id: string): Promise<Article> {
    return this.$database.article.delete({
      where: { id }
    });
  }
}
