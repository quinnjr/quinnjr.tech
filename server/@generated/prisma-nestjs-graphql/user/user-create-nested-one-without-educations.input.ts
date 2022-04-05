import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEducationsInput } from './user-create-without-educations.input';
import { UserCreateOrConnectWithoutEducationsInput } from './user-create-or-connect-without-educations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEducationsInput {

    @Field(() => UserCreateWithoutEducationsInput, {nullable:true})
    create?: UserCreateWithoutEducationsInput;

    @Field(() => UserCreateOrConnectWithoutEducationsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEducationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
