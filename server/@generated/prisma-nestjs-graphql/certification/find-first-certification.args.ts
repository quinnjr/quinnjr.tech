import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationWhereInput } from './certification-where.input';
import { CertificationOrderByWithRelationInput } from './certification-order-by-with-relation.input';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CertificationScalarFieldEnum } from './certification-scalar-field.enum';

@ArgsType()
export class FindFirstCertificationArgs {

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

    @Field(() => [CertificationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CertificationScalarFieldEnum>;
}
