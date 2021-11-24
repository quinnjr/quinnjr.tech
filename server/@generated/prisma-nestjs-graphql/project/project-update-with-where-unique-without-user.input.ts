import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutUserInput } from './project-update-without-user.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutUserInput, {nullable:false})
    data!: ProjectUpdateWithoutUserInput;
}
