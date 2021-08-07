import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConferenceCountAggregate } from './conference-count-aggregate.output';
import { ConferenceMinAggregate } from './conference-min-aggregate.output';
import { ConferenceMaxAggregate } from './conference-max-aggregate.output';

@ObjectType()
export class AggregateConference {

    @Field(() => ConferenceCountAggregate, {nullable:true})
    _count?: ConferenceCountAggregate;

    @Field(() => ConferenceCountAggregate, {nullable:true})
    count?: ConferenceCountAggregate;

    @Field(() => ConferenceMinAggregate, {nullable:true})
    _min?: ConferenceMinAggregate;

    @Field(() => ConferenceMinAggregate, {nullable:true})
    min?: ConferenceMinAggregate;

    @Field(() => ConferenceMaxAggregate, {nullable:true})
    _max?: ConferenceMaxAggregate;

    @Field(() => ConferenceMaxAggregate, {nullable:true})
    max?: ConferenceMaxAggregate;
}
