import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutConferencesInput } from './user-create-without-conferences.input';
import { UserCreateOrConnectWithoutConferencesInput } from './user-create-or-connect-without-conferences.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutConferencesInput {

    @Field(() => UserCreateWithoutConferencesInput, {nullable:true})
    create?: UserCreateWithoutConferencesInput;

    @Field(() => UserCreateOrConnectWithoutConferencesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutConferencesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
