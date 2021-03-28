import { Field, ObjectType, ID, InputType, PartialType, PickType } from '@nestjs/graphql';
import { Project as ProjectModel } from '@prisma/client';

@ObjectType({ description: 'Project model' })
export class Project implements ProjectModel {
  @Field(returns => ID)
  public id: string;

  @Field()
  public name: string;

  @Field()
  public url: string;

  @Field()
  public description: string;

  @Field()
  public content: string;

  @Field()
  public userId: string;
}
