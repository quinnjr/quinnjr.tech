import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ProjectScalarWhereInput {

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    AND?: Array<ProjectScalarWhereInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    OR?: Array<ProjectScalarWhereInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    NOT?: Array<ProjectScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
