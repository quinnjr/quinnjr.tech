import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EducationCreateactivitiesInput } from '../prisma/education-createactivities.input';
import { UserCreateNestedOneWithoutEductationsInput } from '../user/user-create-nested-one-without-eductations.input';

@InputType()
export class EducationCreateInput {

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

    @Field(() => EducationCreateactivitiesInput, {nullable:true})
    activities?: EducationCreateactivitiesInput;

    @Field(() => UserCreateNestedOneWithoutEductationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutEductationsInput;
}
