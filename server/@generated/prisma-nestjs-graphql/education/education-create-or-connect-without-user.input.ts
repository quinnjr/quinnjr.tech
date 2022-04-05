import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EducationWhereUniqueInput } from './education-where-unique.input';
import { EducationCreateWithoutUserInput } from './education-create-without-user.input';

@InputType()
export class EducationCreateOrConnectWithoutUserInput {

    @Field(() => EducationWhereUniqueInput, {nullable:false})
    where!: EducationWhereUniqueInput;

    @Field(() => EducationCreateWithoutUserInput, {nullable:false})
    create!: EducationCreateWithoutUserInput;
}
