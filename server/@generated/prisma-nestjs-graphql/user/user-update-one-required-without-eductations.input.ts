import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEductationsInput } from './user-create-without-eductations.input';
import { UserCreateOrConnectWithoutEductationsInput } from './user-create-or-connect-without-eductations.input';
import { UserUpsertWithoutEductationsInput } from './user-upsert-without-eductations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutEductationsInput } from './user-update-without-eductations.input';

@InputType()
export class UserUpdateOneRequiredWithoutEductationsInput {

    @Field(() => UserCreateWithoutEductationsInput, {nullable:true})
    create?: UserCreateWithoutEductationsInput;

    @Field(() => UserCreateOrConnectWithoutEductationsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEductationsInput;

    @Field(() => UserUpsertWithoutEductationsInput, {nullable:true})
    upsert?: UserUpsertWithoutEductationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutEductationsInput, {nullable:true})
    update?: UserUpdateWithoutEductationsInput;
}
