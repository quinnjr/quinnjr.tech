import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationWhereInput } from './certification-where.input';
import { CertificationOrderByInput } from './certification-order-by.input';
import { CertificationScalarFieldEnum } from './certification-scalar-field.enum';
import { CertificationScalarWhereWithAggregatesInput } from './certification-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CertificationCountAggregateInput } from './certification-count-aggregate.input';
import { CertificationMinAggregateInput } from './certification-min-aggregate.input';
import { CertificationMaxAggregateInput } from './certification-max-aggregate.input';

@ArgsType()
export class CertificationGroupByArgs {

    @Field(() => CertificationWhereInput, {nullable:true})
    where?: CertificationWhereInput;

    @Field(() => [CertificationOrderByInput], {nullable:true})
    orderBy?: Array<CertificationOrderByInput>;

    @Field(() => [CertificationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CertificationScalarFieldEnum>;

    @Field(() => CertificationScalarWhereWithAggregatesInput, {nullable:true})
    having?: CertificationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CertificationCountAggregateInput, {nullable:true})
    _count?: CertificationCountAggregateInput;

    @Field(() => CertificationMinAggregateInput, {nullable:true})
    _min?: CertificationMinAggregateInput;

    @Field(() => CertificationMaxAggregateInput, {nullable:true})
    _max?: CertificationMaxAggregateInput;
}
