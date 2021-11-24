import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EducationWhereUniqueInput } from './education-where-unique.input';
import { EducationUpdateWithoutUserInput } from './education-update-without-user.input';

@InputType()
export class EducationUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EducationWhereUniqueInput, {nullable:false})
    where!: EducationWhereUniqueInput;

    @Field(() => EducationUpdateWithoutUserInput, {nullable:false})
    data!: EducationUpdateWithoutUserInput;
}
