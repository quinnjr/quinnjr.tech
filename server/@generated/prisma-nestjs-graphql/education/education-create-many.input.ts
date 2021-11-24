import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EducationCreateManyactivitiesInput } from './education-create-manyactivities.input';

@InputType()
export class EducationCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:false})
    degree!: string;

    @Field(() => Date, {nullable:true})
    startYear?: Date | string;

    @Field(() => Int, {nullable:true})
    graduationYear?: number;

    @Field(() => String, {nullable:false})
    campusImage!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => EducationCreateManyactivitiesInput, {nullable:true})
    activities?: EducationCreateManyactivitiesInput;
}
