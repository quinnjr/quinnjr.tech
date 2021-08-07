import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';
import { ExperienceUpdateWithoutUserInput } from './experience-update-without-user.input';
import { ExperienceCreateWithoutUserInput } from './experience-create-without-user.input';

@InputType()
export class ExperienceUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    where!: ExperienceWhereUniqueInput;

    @Field(() => ExperienceUpdateWithoutUserInput, {nullable:false})
    update!: ExperienceUpdateWithoutUserInput;

    @Field(() => ExperienceCreateWithoutUserInput, {nullable:false})
    create!: ExperienceCreateWithoutUserInput;
}
