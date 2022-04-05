import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConferenceCreateInput } from './conference-create.input';

@ArgsType()
export class CreateOneConferenceArgs {

    @Field(() => ConferenceCreateInput, {nullable:false})
    data!: ConferenceCreateInput;
}
