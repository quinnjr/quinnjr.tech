import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConferenceWhereUniqueInput } from './conference-where-unique.input';
import { ConferenceCreateWithoutUserInput } from './conference-create-without-user.input';

@InputType()
export class ConferenceCreateOrConnectWithoutUserInput {

    @Field(() => ConferenceWhereUniqueInput, {nullable:false})
    where!: ConferenceWhereUniqueInput;

    @Field(() => ConferenceCreateWithoutUserInput, {nullable:false})
    create!: ConferenceCreateWithoutUserInput;
}
