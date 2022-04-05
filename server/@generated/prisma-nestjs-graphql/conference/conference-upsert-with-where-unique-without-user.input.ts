import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConferenceWhereUniqueInput } from './conference-where-unique.input';
import { ConferenceUpdateWithoutUserInput } from './conference-update-without-user.input';
import { ConferenceCreateWithoutUserInput } from './conference-create-without-user.input';

@InputType()
export class ConferenceUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ConferenceWhereUniqueInput, {nullable:false})
    where!: ConferenceWhereUniqueInput;

    @Field(() => ConferenceUpdateWithoutUserInput, {nullable:false})
    update!: ConferenceUpdateWithoutUserInput;

    @Field(() => ConferenceCreateWithoutUserInput, {nullable:false})
    create!: ConferenceCreateWithoutUserInput;
}
