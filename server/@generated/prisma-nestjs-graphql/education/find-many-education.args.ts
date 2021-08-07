import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationWhereInput } from './education-where.input';
import { EducationOrderByInput } from './education-order-by.input';
import { EducationWhereUniqueInput } from './education-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EducationScalarFieldEnum } from './education-scalar-field.enum';

@ArgsType()
export class FindManyEducationArgs {

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

    @Field(() => [EducationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EducationScalarFieldEnum>;
}
