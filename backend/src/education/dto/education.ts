import { Field, ObjectType, ID, InputType, PartialType, PickType } from '@nestjs/graphql';
import { Education as EductationModel } from '@prisma/client';

@ObjectType({ description: 'Eductation model' })
export class Education implements EductationModel {
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
