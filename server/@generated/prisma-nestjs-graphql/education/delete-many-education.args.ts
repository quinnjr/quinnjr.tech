import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationWhereInput } from './education-where.input';

@ArgsType()
export class DeleteManyEducationArgs {

    @Field(() => EducationWhereInput, {nullable:true})
    where?: EducationWhereInput;
}
