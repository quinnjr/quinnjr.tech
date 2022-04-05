import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationWhereUniqueInput } from './education-where-unique.input';

@ArgsType()
export class DeleteOneEducationArgs {

    @Field(() => EducationWhereUniqueInput, {nullable:false})
    where!: EducationWhereUniqueInput;
}
