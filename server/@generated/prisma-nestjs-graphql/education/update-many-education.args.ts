import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationUpdateManyMutationInput } from './education-update-many-mutation.input';
import { EducationWhereInput } from './education-where.input';

@ArgsType()
export class UpdateManyEducationArgs {

    @Field(() => EducationUpdateManyMutationInput, {nullable:false})
    data!: EducationUpdateManyMutationInput;

    @Field(() => EducationWhereInput, {nullable:true})
    where?: EducationWhereInput;
}
