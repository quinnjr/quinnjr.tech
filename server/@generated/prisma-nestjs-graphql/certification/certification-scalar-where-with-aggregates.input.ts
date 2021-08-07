import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CertificationScalarWhereWithAggregatesInput {

    @Field(() => [CertificationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CertificationScalarWhereWithAggregatesInput>;

    @Field(() => [CertificationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CertificationScalarWhereWithAggregatesInput>;

    @Field(() => [CertificationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CertificationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    certifier?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
