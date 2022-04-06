import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ConferenceScalarWhereWithAggregatesInput {

    @Field(() => [ConferenceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConferenceScalarWhereWithAggregatesInput>;

    @Field(() => [ConferenceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConferenceScalarWhereWithAggregatesInput>;

    @Field(() => [ConferenceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConferenceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
