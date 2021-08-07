import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';
import { ExperienceUpdateWithoutUserInput } from './experience-update-without-user.input';

@InputType()
export class ExperienceUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    where!: ExperienceWhereUniqueInput;

    @Field(() => ExperienceUpdateWithoutUserInput, {nullable:false})
    data!: ExperienceUpdateWithoutUserInput;
}
