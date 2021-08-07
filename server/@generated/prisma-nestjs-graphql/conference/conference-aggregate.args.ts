import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConferenceWhereInput } from './conference-where.input';
import { ConferenceOrderByInput } from './conference-order-by.input';
import { ConferenceWhereUniqueInput } from './conference-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConferenceCountAggregateInput } from './conference-count-aggregate.input';
import { ConferenceMinAggregateInput } from './conference-min-aggregate.input';
import { ConferenceMaxAggregateInput } from './conference-max-aggregate.input';

@ArgsType()
export class ConferenceAggregateArgs {

    @Field(() => ConferenceWhereInput, {nullable:true})
    where?: ConferenceWhereInput;

    @Field(() => [ConferenceOrderByInput], {nullable:true})
    orderBy?: Array<ConferenceOrderByInput>;

    @Field(() => ConferenceWhereUniqueInput, {nullable:true})
    cursor?: ConferenceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConferenceCountAggregateInput, {nullable:true})
    _count?: ConferenceCountAggregateInput;

    @Field(() => ConferenceMinAggregateInput, {nullable:true})
    _min?: ConferenceMinAggregateInput;

    @Field(() => ConferenceMaxAggregateInput, {nullable:true})
    _max?: ConferenceMaxAggregateInput;
}