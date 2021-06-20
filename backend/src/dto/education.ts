import { Field, ObjectType, ID, InputType, PartialType, PickType } from '@nestjs/graphql';
import { Education as EducationModel } from '@prisma/client';

@ObjectType({ description: 'Education model' })
export class Education implements EducationModel {
  @Field(returns => ID)
  public id: string;

  @Field()
  public name: string;

  @Field()
  public location: string;

  @Field()
  public degree: string;

  @Field(returns => [String])
  public activities: string[];

  @Field({ nullable: true })
  public graduationYear: number | null;

  @Field()
  public userId: string;
}
