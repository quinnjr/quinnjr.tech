import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class EducationScalarWhereInput {

    @Field(() => [EducationScalarWhereInput], {nullable:true})
    AND?: Array<EducationScalarWhereInput>;

    @Field(() => [EducationScalarWhereInput], {nullable:true})
    OR?: Array<EducationScalarWhereInput>;

    @Field(() => [EducationScalarWhereInput], {nullable:true})
    NOT?: Array<EducationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    degree?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    graduationYear?: IntNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    activities?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    campusImage?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
