import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExperienceWhereInput } from './experience-where.input';
import { ExperienceOrderByInput } from './experience-order-by.input';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExperienceScalarFieldEnum } from './experience-scalar-field.enum';

@ArgsType()
export class FindFirstExperienceArgs {

    @Field(() => ExperienceWhereInput, {nullable:true})
    where?: ExperienceWhereInput;

    @Field(() => [ExperienceOrderByInput], {nullable:true})
    orderBy?: Array<ExperienceOrderByInput>;

    @Field(() => ExperienceWhereUniqueInput, {nullable:true})
    cursor?: ExperienceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ExperienceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExperienceScalarFieldEnum>;
}
