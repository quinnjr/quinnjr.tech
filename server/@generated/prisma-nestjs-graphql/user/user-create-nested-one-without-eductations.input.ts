import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEductationsInput } from './user-create-without-eductations.input';
import { UserCreateOrConnectWithoutEductationsInput } from './user-create-or-connect-without-eductations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEductationsInput {

    @Field(() => UserCreateWithoutEductationsInput, {nullable:true})
    create?: UserCreateWithoutEductationsInput;

    @Field(() => UserCreateOrConnectWithoutEductationsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEductationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
