import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConferenceWhereUniqueInput } from './conference-where-unique.input';
import { ConferenceCreateInput } from './conference-create.input';
import { ConferenceUpdateInput } from './conference-update.input';

@ArgsType()
export class UpsertOneConferenceArgs {

    @Field(() => ConferenceWhereUniqueInput, {nullable:false})
    where!: ConferenceWhereUniqueInput;

    @Field(() => ConferenceCreateInput, {nullable:false})
    create!: ConferenceCreateInput;

    @Field(() => ConferenceUpdateInput, {nullable:false})
    update!: ConferenceUpdateInput;
}
