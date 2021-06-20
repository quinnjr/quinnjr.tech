import { Field, ObjectType, ID, InputType, PartialType, PickType } from '@nestjs/graphql';
import { Experience as ExperienceModel } from '@prisma/client';

@ObjectType({ description: 'Experience model' })
export class Experience implements ExperienceModel {
  @Field(returns => ID)
  public id: string;

  @Field()
  public employer: string;

  @Field()
  public title: string;

  @Field()
  public location: string;

  @Field()
  public startYear: number;

  @Field({ nullable: true })
  public endYear: number | null;

  @Field()
  public description: string;

  @Field(returns => Date)
  public createdAt: Date;

  @Field(returns => Date)
  public updatedAt: Date;

  @Field()
  public userId: string;
}

@InputType()
export class CreateExperience extends PickType(Experience, [
  'employer',
  'title',
  'location',
  'startYear',
  'endYear',
  'description'
] as const) {}

@InputType()
export class UpdateArticle extends PartialType(CreateExperience) {}
