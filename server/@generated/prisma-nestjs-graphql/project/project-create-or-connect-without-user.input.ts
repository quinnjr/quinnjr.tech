import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutUserInput } from './project-create-without-user.input';

@InputType()
export class ProjectCreateOrConnectWithoutUserInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutUserInput, {nullable:false})
    create!: ProjectCreateWithoutUserInput;
}
