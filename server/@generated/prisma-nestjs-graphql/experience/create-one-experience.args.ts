import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExperienceCreateInput } from './experience-create.input';

@ArgsType()
export class CreateOneExperienceArgs {

    @Field(() => ExperienceCreateInput, {nullable:false})
    data!: ExperienceCreateInput;
}
