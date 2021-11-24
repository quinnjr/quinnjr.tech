import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConferenceWhereUniqueInput } from './conference-where-unique.input';
import { ConferenceUpdateWithoutUserInput } from './conference-update-without-user.input';

@InputType()
export class ConferenceUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ConferenceWhereUniqueInput, {nullable:false})
    where!: ConferenceWhereUniqueInput;

    @Field(() => ConferenceUpdateWithoutUserInput, {nullable:false})
    data!: ConferenceUpdateWithoutUserInput;
}
