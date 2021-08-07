import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutEductationsInput } from './user-create-without-eductations.input';

@InputType()
export class UserCreateOrConnectWithoutEductationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEductationsInput, {nullable:false})
    create!: UserCreateWithoutEductationsInput;
}
