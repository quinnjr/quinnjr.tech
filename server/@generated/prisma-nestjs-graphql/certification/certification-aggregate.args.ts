import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationWhereInput } from './certification-where.input';
import { CertificationOrderByWithRelationInput } from './certification-order-by-with-relation.input';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CertificationCountAggregateInput } from './certification-count-aggregate.input';
import { CertificationMinAggregateInput } from './certification-min-aggregate.input';
import { CertificationMaxAggregateInput } from './certification-max-aggregate.input';

@ArgsType()
export class CertificationAggregateArgs {

    @Field(() => CertificationWhereInput, {nullable:true})
    where?: CertificationWhereInput;

    @Field(() => [CertificationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CertificationOrderByWithRelationInput>;

    @Field(() => CertificationWhereUniqueInput, {nullable:true})
    cursor?: CertificationWhereUniqueInput;

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
