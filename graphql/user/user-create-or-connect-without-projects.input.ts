import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProjectsInput } from './user-create-without-projects.input';

@InputType()
export class UserCreateOrConnectWithoutProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'firstName' | 'lastName' | 'linkedin' | 'github'>;

    @Field(() => UserCreateWithoutProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutProjectsInput)
    create!: UserCreateWithoutProjectsInput;
}