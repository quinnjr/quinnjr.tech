import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EducationScalarWhereInput } from './education-scalar-where.input';
import { EducationUpdateManyMutationInput } from './education-update-many-mutation.input';

@InputType()
export class EducationUpdateManyWithWhereWithoutUserInput {

    @Field(() => EducationScalarWhereInput, {nullable:false})
    where!: EducationScalarWhereInput;

    @Field(() => EducationUpdateManyMutationInput, {nullable:false})
    data!: EducationUpdateManyMutationInput;
}
