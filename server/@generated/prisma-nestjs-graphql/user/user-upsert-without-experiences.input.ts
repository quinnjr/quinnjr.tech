import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutExperiencesInput } from './user-update-without-experiences.input';
import { UserCreateWithoutExperiencesInput } from './user-create-without-experiences.input';

@InputType()
export class UserUpsertWithoutExperiencesInput {

    @Field(() => UserUpdateWithoutExperiencesInput, {nullable:false})
    update!: UserUpdateWithoutExperiencesInput;

    @Field(() => UserCreateWithoutExperiencesInput, {nullable:false})
    create!: UserCreateWithoutExperiencesInput;
}
