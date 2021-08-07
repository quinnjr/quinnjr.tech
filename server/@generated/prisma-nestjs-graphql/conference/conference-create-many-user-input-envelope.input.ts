import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConferenceCreateManyUserInput } from './conference-create-many-user.input';

@InputType()
export class ConferenceCreateManyUserInputEnvelope {

    @Field(() => [ConferenceCreateManyUserInput], {nullable:false})
    data!: Array<ConferenceCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
