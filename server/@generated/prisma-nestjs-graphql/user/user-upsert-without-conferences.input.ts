import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutConferencesInput } from './user-update-without-conferences.input';
import { UserCreateWithoutConferencesInput } from './user-create-without-conferences.input';

@InputType()
export class UserUpsertWithoutConferencesInput {

    @Field(() => UserUpdateWithoutConferencesInput, {nullable:false})
    update!: UserUpdateWithoutConferencesInput;

    @Field(() => UserCreateWithoutConferencesInput, {nullable:false})
    create!: UserCreateWithoutConferencesInput;
}
