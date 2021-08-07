import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';
import { ExperienceCreateWithoutUserInput } from './experience-create-without-user.input';

@InputType()
export class ExperienceCreateOrConnectWithoutUserInput {

    @Field(() => ExperienceWhereUniqueInput, {nullable:false})
    where!: ExperienceWhereUniqueInput;

    @Field(() => ExperienceCreateWithoutUserInput, {nullable:false})
    create!: ExperienceCreateWithoutUserInput;
}
