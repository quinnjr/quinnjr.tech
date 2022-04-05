import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConferenceWhereUniqueInput } from './conference-where-unique.input';

@ArgsType()
export class DeleteOneConferenceArgs {

    @Field(() => ConferenceWhereUniqueInput, {nullable:false})
    where!: ConferenceWhereUniqueInput;
}
