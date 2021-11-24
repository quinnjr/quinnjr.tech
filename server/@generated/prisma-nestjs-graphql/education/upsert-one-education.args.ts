import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationWhereUniqueInput } from './education-where-unique.input';
import { EducationCreateInput } from './education-create.input';
import { EducationUpdateInput } from './education-update.input';

@ArgsType()
export class UpsertOneEducationArgs {

    @Field(() => EducationWhereUniqueInput, {nullable:false})
    where!: EducationWhereUniqueInput;

    @Field(() => EducationCreateInput, {nullable:false})
    create!: EducationCreateInput;

    @Field(() => EducationUpdateInput, {nullable:false})
    update!: EducationUpdateInput;
}
