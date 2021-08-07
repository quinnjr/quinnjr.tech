import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectScalarWhereInput } from './project-scalar-where.input';
import { ProjectUpdateManyMutationInput } from './project-update-many-mutation.input';

@InputType()
export class ProjectUpdateManyWithWhereWithoutUserInput {

    @Field(() => ProjectScalarWhereInput, {nullable:false})
    where!: ProjectScalarWhereInput;

    @Field(() => ProjectUpdateManyMutationInput, {nullable:false})
    data!: ProjectUpdateManyMutationInput;
}
