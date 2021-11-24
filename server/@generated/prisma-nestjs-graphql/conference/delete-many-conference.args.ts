import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConferenceWhereInput } from './conference-where.input';

@ArgsType()
export class DeleteManyConferenceArgs {

    @Field(() => ConferenceWhereInput, {nullable:true})
    where?: ConferenceWhereInput;
}
