import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConferenceCreateManyInput } from './conference-create-many.input';

@ArgsType()
export class CreateManyConferenceArgs {

    @Field(() => [ConferenceCreateManyInput], {nullable:false})
    data!: Array<ConferenceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
