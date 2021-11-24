import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectUpdateInput } from './project-update.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@ArgsType()
export class UpdateOneProjectArgs {

    @Field(() => ProjectUpdateInput, {nullable:false})
    data!: ProjectUpdateInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;
}
