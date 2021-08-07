import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExperienceUpdateManyMutationInput } from './experience-update-many-mutation.input';
import { ExperienceWhereInput } from './experience-where.input';

@ArgsType()
export class UpdateManyExperienceArgs {

    @Field(() => ExperienceUpdateManyMutationInput, {nullable:false})
    data!: ExperienceUpdateManyMutationInput;

    @Field(() => ExperienceWhereInput, {nullable:true})
    where?: ExperienceWhereInput;
}
