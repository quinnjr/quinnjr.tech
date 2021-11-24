import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConferenceScalarWhereInput } from './conference-scalar-where.input';
import { ConferenceUpdateManyMutationInput } from './conference-update-many-mutation.input';

@InputType()
export class ConferenceUpdateManyWithWhereWithoutUserInput {

    @Field(() => ConferenceScalarWhereInput, {nullable:false})
    where!: ConferenceScalarWhereInput;

    @Field(() => ConferenceUpdateManyMutationInput, {nullable:false})
    data!: ConferenceUpdateManyMutationInput;
}
