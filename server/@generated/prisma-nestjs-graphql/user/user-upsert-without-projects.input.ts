import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProjectsInput } from './user-update-without-projects.input';
import { UserCreateWithoutProjectsInput } from './user-create-without-projects.input';

@InputType()
export class UserUpsertWithoutProjectsInput {

    @Field(() => UserUpdateWithoutProjectsInput, {nullable:false})
    update!: UserUpdateWithoutProjectsInput;

    @Field(() => UserCreateWithoutProjectsInput, {nullable:false})
    create!: UserCreateWithoutProjectsInput;
}
