import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationWhereUniqueInput } from './education-where-unique.input';

@ArgsType()
export class FindUniqueEducationArgs {

    @Field(() => EducationWhereUniqueInput, {nullable:false})
    where!: EducationWhereUniqueInput;
}
