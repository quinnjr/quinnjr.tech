import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEducationsInput } from './user-update-without-educations.input';
import { UserCreateWithoutEducationsInput } from './user-create-without-educations.input';

@InputType()
export class UserUpsertWithoutEducationsInput {

    @Field(() => UserUpdateWithoutEducationsInput, {nullable:false})
    update!: UserUpdateWithoutEducationsInput;

    @Field(() => UserCreateWithoutEducationsInput, {nullable:false})
    create!: UserCreateWithoutEducationsInput;
}
