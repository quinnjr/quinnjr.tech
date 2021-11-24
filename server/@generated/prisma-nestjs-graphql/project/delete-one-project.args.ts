import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@ArgsType()
export class DeleteOneProjectArgs {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;
}
