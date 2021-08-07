import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationUpdateInput } from './education-update.input';
import { EducationWhereUniqueInput } from './education-where-unique.input';

@ArgsType()
export class UpdateOneEducationArgs {

    @Field(() => EducationUpdateInput, {nullable:false})
    data!: EducationUpdateInput;

    @Field(() => EducationWhereUniqueInput, {nullable:false})
    where!: EducationWhereUniqueInput;
}
