import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceWhereInput } from './experience-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ExperienceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ExperienceWhereInput], {nullable:true})
    AND?: Array<ExperienceWhereInput>;

    @Field(() => [ExperienceWhereInput], {nullable:true})
    OR?: Array<ExperienceWhereInput>;

    @Field(() => [ExperienceWhereInput], {nullable:true})
    NOT?: Array<ExperienceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    employer?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    startYear?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    endYear?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    userId?: UuidFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
