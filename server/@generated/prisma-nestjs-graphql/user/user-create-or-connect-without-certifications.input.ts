import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCertificationsInput } from './user-create-without-certifications.input';

@InputType()
export class UserCreateOrConnectWithoutCertificationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCertificationsInput, {nullable:false})
    create!: UserCreateWithoutCertificationsInput;
}
