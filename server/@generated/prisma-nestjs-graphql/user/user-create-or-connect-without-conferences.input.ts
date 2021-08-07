import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutConferencesInput } from './user-create-without-conferences.input';

@InputType()
export class UserCreateOrConnectWithoutConferencesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutConferencesInput, {nullable:false})
    create!: UserCreateWithoutConferencesInput;
}
