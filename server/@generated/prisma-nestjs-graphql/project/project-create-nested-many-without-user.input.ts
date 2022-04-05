import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutUserInput } from './project-create-without-user.input';
import { ProjectCreateOrConnectWithoutUserInput } from './project-create-or-connect-without-user.input';
import { ProjectCreateManyUserInputEnvelope } from './project-create-many-user-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutUserInput {

    @Field(() => [ProjectCreateWithoutUserInput], {nullable:true})
    create?: Array<ProjectCreateWithoutUserInput>;

    @Field(() => [ProjectCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutUserInput>;

    @Field(() => ProjectCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ProjectCreateManyUserInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    connect?: Array<ProjectWhereUniqueInput>;
}
