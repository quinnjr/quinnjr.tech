import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EducationCreateactivitiesInput } from '../prisma/education-createactivities.input';

@InputType()
export class EducationUncheckedCreateInput {

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

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => EducationCreateactivitiesInput, {nullable:true})
    activities?: EducationCreateactivitiesInput;
}