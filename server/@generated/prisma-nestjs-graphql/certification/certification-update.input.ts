import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCertificationsInput } from '../user/user-update-one-required-without-certifications.input';

@InputType()
export class CertificationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    certifier?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCertificationsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCertificationsInput;
}
