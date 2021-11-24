import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConferenceUpdateManyMutationInput } from './conference-update-many-mutation.input';
import { ConferenceWhereInput } from './conference-where.input';

@ArgsType()
export class UpdateManyConferenceArgs {

    @Field(() => ConferenceUpdateManyMutationInput, {nullable:false})
    data!: ConferenceUpdateManyMutationInput;

    @Field(() => ConferenceWhereInput, {nullable:true})
    where?: ConferenceWhereInput;
}
