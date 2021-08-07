import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConferenceWhereInput } from './conference-where.input';
import { ConferenceOrderByInput } from './conference-order-by.input';
import { ConferenceWhereUniqueInput } from './conference-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConferenceScalarFieldEnum } from './conference-scalar-field.enum';

@ArgsType()
export class FindFirstConferenceArgs {

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

    @Field(() => [ConferenceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConferenceScalarFieldEnum>;
}
