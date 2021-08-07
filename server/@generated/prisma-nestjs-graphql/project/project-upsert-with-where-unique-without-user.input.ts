import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutUserInput } from './project-update-without-user.input';
import { ProjectCreateWithoutUserInput } from './project-create-without-user.input';

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutUserInput, {nullable:false})
    update!: ProjectUpdateWithoutUserInput;

    @Field(() => ProjectCreateWithoutUserInput, {nullable:false})
    create!: ProjectCreateWithoutUserInput;
}
