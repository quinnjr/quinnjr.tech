import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EducationCreateManyactivitiesInput } from './education-create-manyactivities.input';

@InputType()
export class EducationCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:false})
    degree!: string;

    @Field(() => Int, {nullable:true})
    graduationYear?: number;

    @Field(() => EducationCreateManyactivitiesInput, {nullable:true})
    activities?: EducationCreateManyactivitiesInput;
}
