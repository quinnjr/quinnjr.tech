import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProjectsInput } from './user-update-without-projects.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProjectsInput } from './user-create-without-projects.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProjectsInput {

    @Field(() => UserUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutProjectsInput)
    update!: UserUpdateWithoutProjectsInput;

    @Field(() => UserCreateWithoutProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutProjectsInput)
    create!: UserCreateWithoutProjectsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
