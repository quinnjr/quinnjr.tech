import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceCreateManyUserInput } from './experience-create-many-user.input';

@InputType()
export class ExperienceCreateManyUserInputEnvelope {

    @Field(() => [ExperienceCreateManyUserInput], {nullable:false})
    data!: Array<ExperienceCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
