import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { ProjectOrderByInput } from './project-order-by.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectScalarFieldEnum } from './project-scalar-field.enum';

@ArgsType()
export class FindManyProjectArgs {

    @Field(() => ProjectWhereInput, {nullable:true})
    where?: ProjectWhereInput;

    @Field(() => [ProjectOrderByInput], {nullable:true})
    orderBy?: Array<ProjectOrderByInput>;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: ProjectWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}