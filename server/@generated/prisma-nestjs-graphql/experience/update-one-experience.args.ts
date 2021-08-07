import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExperienceUpdateInput } from './experience-update.input';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';

@ArgsType()
export class UpdateOneExperienceArgs {

    @Field(() => ExperienceUpdateInput, {nullable:false})
    data!: ExperienceUpdateInput;

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    where!: ExperienceWhereUniqueInput;
}
