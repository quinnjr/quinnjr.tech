import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CertificationCountAggregate } from './certification-count-aggregate.output';
import { CertificationMinAggregate } from './certification-min-aggregate.output';
import { CertificationMaxAggregate } from './certification-max-aggregate.output';

@ObjectType()
export class AggregateCertification {

    @Field(() => CertificationCountAggregate, {nullable:true})
    _count?: CertificationCountAggregate;

    @Field(() => CertificationCountAggregate, {nullable:true})
    count?: CertificationCountAggregate;

    @Field(() => CertificationMinAggregate, {nullable:true})
    _min?: CertificationMinAggregate;

    @Field(() => CertificationMinAggregate, {nullable:true})
    min?: CertificationMinAggregate;

    @Field(() => CertificationMaxAggregate, {nullable:true})
    _max?: CertificationMaxAggregate;

    @Field(() => CertificationMaxAggregate, {nullable:true})
    max?: CertificationMaxAggregate;
}
