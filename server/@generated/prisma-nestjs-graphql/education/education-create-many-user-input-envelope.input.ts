import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EducationCreateManyUserInput } from './education-create-many-user.input';

@InputType()
export class EducationCreateManyUserInputEnvelope {

    @Field(() => [EducationCreateManyUserInput], {nullable:false})
    data!: Array<EducationCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
