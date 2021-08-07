import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EducationWhereUniqueInput } from './education-where-unique.input';
import { EducationUpdateWithoutUserInput } from './education-update-without-user.input';
import { EducationCreateWithoutUserInput } from './education-create-without-user.input';

@InputType()
export class EducationUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EducationWhereUniqueInput, {nullable:false})
    where!: EducationWhereUniqueInput;

    @Field(() => EducationUpdateWithoutUserInput, {nullable:false})
    update!: EducationUpdateWithoutUserInput;

    @Field(() => EducationCreateWithoutUserInput, {nullable:false})
    create!: EducationCreateWithoutUserInput;
}
