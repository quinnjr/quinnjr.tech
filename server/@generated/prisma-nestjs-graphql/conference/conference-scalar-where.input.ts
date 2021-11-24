import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ConferenceScalarWhereInput {

    @Field(() => [ConferenceScalarWhereInput], {nullable:true})
    AND?: Array<ConferenceScalarWhereInput>;

    @Field(() => [ConferenceScalarWhereInput], {nullable:true})
    OR?: Array<ConferenceScalarWhereInput>;

    @Field(() => [ConferenceScalarWhereInput], {nullable:true})
    NOT?: Array<ConferenceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
