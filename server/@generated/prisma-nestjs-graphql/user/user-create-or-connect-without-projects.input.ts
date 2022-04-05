import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutProjectsInput } from './user-create-without-projects.input';

@InputType()
export class UserCreateOrConnectWithoutProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutProjectsInput, {nullable:false})
    create!: UserCreateWithoutProjectsInput;
}
