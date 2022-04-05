import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EducationCreateManyInput } from './education-create-many.input';

@ArgsType()
export class CreateManyEducationArgs {

    @Field(() => [EducationCreateManyInput], {nullable:false})
    data!: Array<EducationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
