import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEductationsInput } from './user-update-without-eductations.input';
import { UserCreateWithoutEductationsInput } from './user-create-without-eductations.input';

@InputType()
export class UserUpsertWithoutEductationsInput {

    @Field(() => UserUpdateWithoutEductationsInput, {nullable:false})
    update!: UserUpdateWithoutEductationsInput;

    @Field(() => UserCreateWithoutEductationsInput, {nullable:false})
    create!: UserCreateWithoutEductationsInput;
}
