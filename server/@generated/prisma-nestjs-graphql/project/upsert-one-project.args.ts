import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateInput } from './project-create.input';
import { ProjectUpdateInput } from './project-update.input';

@ArgsType()
export class UpsertOneProjectArgs {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateInput, {nullable:false})
    create!: ProjectCreateInput;

    @Field(() => ProjectUpdateInput, {nullable:false})
    update!: ProjectUpdateInput;
}
