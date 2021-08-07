import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectUpdateManyMutationInput } from './project-update-many-mutation.input';
import { ProjectWhereInput } from './project-where.input';

@ArgsType()
export class UpdateManyProjectArgs {

    @Field(() => ProjectUpdateManyMutationInput, {nullable:false})
    data!: ProjectUpdateManyMutationInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    where?: ProjectWhereInput;
}
