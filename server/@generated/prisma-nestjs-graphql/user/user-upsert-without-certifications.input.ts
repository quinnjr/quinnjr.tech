import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCertificationsInput } from './user-update-without-certifications.input';
import { UserCreateWithoutCertificationsInput } from './user-create-without-certifications.input';

@InputType()
export class UserUpsertWithoutCertificationsInput {

    @Field(() => UserUpdateWithoutCertificationsInput, {nullable:false})
    update!: UserUpdateWithoutCertificationsInput;

    @Field(() => UserCreateWithoutCertificationsInput, {nullable:false})
    create!: UserCreateWithoutCertificationsInput;
}
