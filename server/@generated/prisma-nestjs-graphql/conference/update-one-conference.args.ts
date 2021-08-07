import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConferenceUpdateInput } from './conference-update.input';
import { ConferenceWhereUniqueInput } from './conference-where-unique.input';

@ArgsType()
export class UpdateOneConferenceArgs {

    @Field(() => ConferenceUpdateInput, {nullable:false})
    data!: ConferenceUpdateInput;

    @Field(() => ConferenceWhereUniqueInput, {nullable:false})
    where!: ConferenceWhereUniqueInput;
}
