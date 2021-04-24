import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { User as UserModel , Role} from '@prisma/client';
import { Certification } from '../../certifications/dto/certification';
import { Education } from '../../education/dto/education';
import { Experience } from '../../experiences/dto/experience';
import { Project } from '../../projects/dto/project';

import { Article } from '../../articles/dto/article';

@ObjectType({ description: 'User model' })
export class User implements UserModel {
  @Field(type => ID)
  public id: string;

  @Field()
  public email: string;

  public passwordHash: string;

  @Field()
  public firstName: string;

  @Field()
  public middleName: string | null;

  @Field()
  public lastName: string;

  @Field()
  public profilePicture: string;

  @Field()
  public profile: string;

  @Field(type => [String])
  public skills: string[];

  @Field(type => String)
  public role: Role;

  @Field(type => [Article], { nullable: true })
  public articles?: Article[];

  @Field(type => [Experience], { nullable: true })
  public experiences?: Experience[]

  @Field(type => [Education], { nullable: true })
  public educations?: Education[]

  @Field(type => [Certification], { nullable: true })
  public certifications?: Certification[]

  @Field(type => [Project], { nullable: true })
  public projects?: Project[]

  @Field(type => Date)
  public createdAt: Date;

  @Field(type => Date)
  public updatedAt: Date;
}
