import { Field, ObjectType, ID, InputType, PartialType, PickType } from '@nestjs/graphql';
import { Certification as CertificationModel, Prisma } from '@prisma/client';

import { User } from './user';

@ObjectType({ description: 'Certification model' })
export class Certification implements CertificationModel {
  @Field(returns => ID)
  public id: string;

  @Field()
  public name: string;

  @Field()
  public certifier: string;

  @Field()
  public userId: string;

  @Field(returns => User)
  public user?: User;
}

@InputType()
export class CreateCertification {
  @Field(returns => ID)
  public id?: string;

  @Field()
  public name: string;

  @Field()
  public certifier: string;
}

@InputType()
export class UpdateCertification extends PartialType(CreateCertification) {}
