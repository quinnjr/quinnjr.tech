import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConferenceCreateWithoutUserInput } from './conference-create-without-user.input';
import { ConferenceCreateOrConnectWithoutUserInput } from './conference-create-or-connect-without-user.input';
import { ConferenceCreateManyUserInputEnvelope } from './conference-create-many-user-input-envelope.input';
import { ConferenceWhereUniqueInput } from './conference-where-unique.input';

@InputType()
export class ConferenceCreateNestedManyWithoutUserInput {

    @Field(() => [ConferenceCreateWithoutUserInput], {nullable:true})
    create?: Array<ConferenceCreateWithoutUserInput>;

    @Field(() => [ConferenceCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ConferenceCreateOrConnectWithoutUserInput>;

    @Field(() => ConferenceCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ConferenceCreateManyUserInputEnvelope;

    @Field(() => [ConferenceWhereUniqueInput], {nullable:true})
    connect?: Array<ConferenceWhereUniqueInput>;
}
