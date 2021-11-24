import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExperienceWhereInput } from './experience-where.input';

@ArgsType()
export class DeleteManyExperienceArgs {

    @Field(() => ExperienceWhereInput, {nullable:true})
    where?: ExperienceWhereInput;
}
