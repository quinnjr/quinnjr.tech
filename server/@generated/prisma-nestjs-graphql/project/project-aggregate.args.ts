import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { ProjectOrderByInput } from './project-order-by.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectCountAggregateInput } from './project-count-aggregate.input';
import { ProjectMinAggregateInput } from './project-min-aggregate.input';
import { ProjectMaxAggregateInput } from './project-max-aggregate.input';

@ArgsType()
export class ProjectAggregateArgs {

    @Field(() => ProjectWhereInput, {nullable:true})
    where?: ProjectWhereInput;

    @Field(() => [ProjectOrderByInput], {nullable:true})
    orderBy?: Array<ProjectOrderByInput>;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: ProjectWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectCountAggregateInput, {nullable:true})
    _count?: ProjectCountAggregateInput;

    @Field(() => ProjectMinAggregateInput, {nullable:true})
    _min?: ProjectMinAggregateInput;

    @Field(() => ProjectMaxAggregateInput, {nullable:true})
    _max?: ProjectMaxAggregateInput;
}
