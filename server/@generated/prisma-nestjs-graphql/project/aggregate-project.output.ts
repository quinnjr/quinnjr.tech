import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectCountAggregate } from './project-count-aggregate.output';
import { ProjectMinAggregate } from './project-min-aggregate.output';
import { ProjectMaxAggregate } from './project-max-aggregate.output';

@ObjectType()
export class AggregateProject {

    @Field(() => ProjectCountAggregate, {nullable:true})
    _count?: ProjectCountAggregate;

    @Field(() => ProjectCountAggregate, {nullable:true})
    count?: ProjectCountAggregate;

    @Field(() => ProjectMinAggregate, {nullable:true})
    _min?: ProjectMinAggregate;

    @Field(() => ProjectMinAggregate, {nullable:true})
    min?: ProjectMinAggregate;

    @Field(() => ProjectMaxAggregate, {nullable:true})
    _max?: ProjectMaxAggregate;

    @Field(() => ProjectMaxAggregate, {nullable:true})
    max?: ProjectMaxAggregate;
}
