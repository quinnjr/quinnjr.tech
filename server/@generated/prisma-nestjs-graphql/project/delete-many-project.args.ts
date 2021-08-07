import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';

@ArgsType()
export class DeleteManyProjectArgs {

    @Field(() => ProjectWhereInput, {nullable:true})
    where?: ProjectWhereInput;
}
