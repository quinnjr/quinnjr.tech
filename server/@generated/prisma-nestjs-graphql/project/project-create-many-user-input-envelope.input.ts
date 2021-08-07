import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyUserInput } from './project-create-many-user.input';

@InputType()
export class ProjectCreateManyUserInputEnvelope {

    @Field(() => [ProjectCreateManyUserInput], {nullable:false})
    data!: Array<ProjectCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
