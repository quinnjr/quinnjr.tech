import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EducationUpdateactivitiesInput } from '../prisma/education-updateactivities.input';
import { UserUpdateOneRequiredWithoutEductationsInput } from '../user/user-update-one-required-without-eductations.input';

@InputType()
export class EducationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    degree?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    graduationYear?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    campusImage?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => EducationUpdateactivitiesInput, {nullable:true})
    activities?: EducationUpdateactivitiesInput;

    @Field(() => UserUpdateOneRequiredWithoutEductationsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutEductationsInput;
}
