import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';

@ArgsType()
export class FindUniqueExperienceArgs {

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    where!: ExperienceWhereUniqueInput;
}
