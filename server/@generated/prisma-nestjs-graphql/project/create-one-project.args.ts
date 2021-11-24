import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectCreateInput } from './project-create.input';

@ArgsType()
export class CreateOneProjectArgs {

    @Field(() => ProjectCreateInput, {nullable:false})
    data!: ProjectCreateInput;
}
