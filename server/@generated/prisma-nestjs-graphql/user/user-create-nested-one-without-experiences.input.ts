import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutExperiencesInput } from './user-create-without-experiences.input';
import { UserCreateOrConnectWithoutExperiencesInput } from './user-create-or-connect-without-experiences.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutExperiencesInput {

    @Field(() => UserCreateWithoutExperiencesInput, {nullable:true})
    create?: UserCreateWithoutExperiencesInput;

    @Field(() => UserCreateOrConnectWithoutExperiencesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
