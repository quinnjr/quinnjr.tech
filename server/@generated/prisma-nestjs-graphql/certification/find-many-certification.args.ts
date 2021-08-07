import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationWhereInput } from './certification-where.input';
import { CertificationOrderByInput } from './certification-order-by.input';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CertificationScalarFieldEnum } from './certification-scalar-field.enum';

@ArgsType()
export class FindManyCertificationArgs {

    @Field(() => CertificationWhereInput, {nullable:true})
    where?: CertificationWhereInput;

    @Field(() => [CertificationOrderByInput], {nullable:true})
    orderBy?: Array<CertificationOrderByInput>;

    @Field(() => CertificationWhereUniqueInput, {nullable:true})
    cursor?: CertificationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CertificationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CertificationScalarFieldEnum>;
}
