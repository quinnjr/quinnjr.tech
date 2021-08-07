import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationCreateInput } from './education-create.input';

@ArgsType()
export class CreateOneEducationArgs {

    @Field(() => EducationCreateInput, {nullable:false})
    data!: EducationCreateInput;
}
