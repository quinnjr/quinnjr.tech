import { Field, ObjectType, ID, InputType, PartialType, PickType } from '@nestjs/graphql';
import { Article as ArticleModel, Prisma } from '@prisma/client';

import { User } from './user';

@ObjectType({ description: 'Article model' })
export class Article implements ArticleModel {
  @Field(type => ID)
  public id: string;

  @Field()
  public title: string;

  @Field()
  public titleSlug: string;

  @Field()
  public content: string;

  @Field()
  public description: string;

  @Field()
  public authorId: string;

  @Field(type => User, { nullable: true })
  public author?: User

  @Field(type => Date)
  public createdAt: Date;

  @Field(type => Date)
  public updatedAt: Date;
}

@InputType()
export class CreateArticle implements Prisma.ArticleCreateWithoutAuthorInput {
  @Field(type => ID)
  public id?: string;

  @Field()
  public title: string;

  @Field()
  public titleSlug: string;

  @Field()
  public content: string;

  @Field()
  public description: string;

  @Field()
  public authorId: string;
}

@InputType()
export class UpdateArticle extends PartialType(CreateArticle) {}
