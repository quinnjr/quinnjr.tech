import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ProjectScalarWhereWithAggregatesInput {

    @Field(() => [ProjectScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
