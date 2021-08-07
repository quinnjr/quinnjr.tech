import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExperienceCreateManyInput } from './experience-create-many.input';

@ArgsType()
export class CreateManyExperienceArgs {

    @Field(() => [ExperienceCreateManyInput], {nullable:false})
    data!: Array<ExperienceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
