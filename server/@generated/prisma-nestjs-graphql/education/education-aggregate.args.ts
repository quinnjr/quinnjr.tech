import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationWhereInput } from './education-where.input';
import { EducationOrderByInput } from './education-order-by.input';
import { EducationWhereUniqueInput } from './education-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EducationCountAggregateInput } from './education-count-aggregate.input';
import { EducationAvgAggregateInput } from './education-avg-aggregate.input';
import { EducationSumAggregateInput } from './education-sum-aggregate.input';
import { EducationMinAggregateInput } from './education-min-aggregate.input';
import { EducationMaxAggregateInput } from './education-max-aggregate.input';

@ArgsType()
export class EducationAggregateArgs {

    @Field(() => EducationWhereInput, {nullable:true})
    where?: EducationWhereInput;

    @Field(() => [EducationOrderByInput], {nullable:true})
    orderBy?: Array<EducationOrderByInput>;

    @Field(() => EducationWhereUniqueInput, {nullable:true})
    cursor?: EducationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EducationCountAggregateInput, {nullable:true})
    _count?: EducationCountAggregateInput;

    @Field(() => EducationAvgAggregateInput, {nullable:true})
    _avg?: EducationAvgAggregateInput;

    @Field(() => EducationSumAggregateInput, {nullable:true})
    _sum?: EducationSumAggregateInput;

    @Field(() => EducationMinAggregateInput, {nullable:true})
    _min?: EducationMinAggregateInput;

    @Field(() => EducationMaxAggregateInput, {nullable:true})
    _max?: EducationMaxAggregateInput;
}
