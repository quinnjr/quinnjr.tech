import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutExperiencesInput } from './user-create-without-experiences.input';

@InputType()
export class UserCreateOrConnectWithoutExperiencesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutExperiencesInput, {nullable:false})
    create!: UserCreateWithoutExperiencesInput;
}
