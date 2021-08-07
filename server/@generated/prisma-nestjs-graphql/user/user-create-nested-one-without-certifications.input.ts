import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCertificationsInput } from './user-create-without-certifications.input';
import { UserCreateOrConnectWithoutCertificationsInput } from './user-create-or-connect-without-certifications.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCertificationsInput {

    @Field(() => UserCreateWithoutCertificationsInput, {nullable:true})
    create?: UserCreateWithoutCertificationsInput;

    @Field(() => UserCreateOrConnectWithoutCertificationsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCertificationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
