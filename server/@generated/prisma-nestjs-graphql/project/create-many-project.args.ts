import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectCreateManyInput } from './project-create-many.input';

@ArgsType()
export class CreateManyProjectArgs {

    @Field(() => [ProjectCreateManyInput], {nullable:false})
    data!: Array<ProjectCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
