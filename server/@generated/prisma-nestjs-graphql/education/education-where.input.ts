import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class EducationWhereInput {

    @Field(() => [EducationWhereInput], {nullable:true})
    AND?: Array<EducationWhereInput>;

    @Field(() => [EducationWhereInput], {nullable:true})
    OR?: Array<EducationWhereInput>;

    @Field(() => [EducationWhereInput], {nullable:true})
    NOT?: Array<EducationWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
