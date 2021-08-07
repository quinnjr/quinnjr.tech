import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';
import { ExperienceCreateInput } from './experience-create.input';
import { ExperienceUpdateInput } from './experience-update.input';

@ArgsType()
export class UpsertOneExperienceArgs {

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    where!: ExperienceWhereUniqueInput;

    @Field(() => ExperienceCreateInput, {nullable:false})
    create!: ExperienceCreateInput;

    @Field(() => ExperienceUpdateInput, {nullable:false})
    update!: ExperienceUpdateInput;
}
