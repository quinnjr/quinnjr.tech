import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceScalarWhereInput } from './experience-scalar-where.input';
import { ExperienceUpdateManyMutationInput } from './experience-update-many-mutation.input';

@InputType()
export class ExperienceUpdateManyWithWhereWithoutUserInput {

    @Field(() => ExperienceScalarWhereInput, {nullable:false})
    where!: ExperienceScalarWhereInput;

    @Field(() => ExperienceUpdateManyMutationInput, {nullable:false})
    data!: ExperienceUpdateManyMutationInput;
}
