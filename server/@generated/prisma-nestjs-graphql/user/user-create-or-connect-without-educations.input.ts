import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutEducationsInput } from './user-create-without-educations.input';

@InputType()
export class UserCreateOrConnectWithoutEducationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEducationsInput, {nullable:false})
    create!: UserCreateWithoutEducationsInput;
}
