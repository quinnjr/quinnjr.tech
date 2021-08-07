import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { UserUpdateskillsInput } from '../prisma/user-updateskills.input';
import { UserUpdateyubikeysInput } from '../prisma/user-updateyubikeys.input';
import { ArticleUncheckedUpdateManyWithoutAuthorInput } from '../article/article-unchecked-update-many-without-author.input';
import { ExperienceUncheckedUpdateManyWithoutUserInput } from '../experience/experience-unchecked-update-many-without-user.input';
import { CertificationUncheckedUpdateManyWithoutUserInput } from '../certification/certification-unchecked-update-many-without-user.input';
import { ProjectUncheckedUpdateManyWithoutUserInput } from '../project/project-unchecked-update-many-without-user.input';
import { ConferenceUncheckedUpdateManyWithoutUserInput } from '../conference/conference-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutEductationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passwordHash?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    middleName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    profile?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    birthday?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateskillsInput, {nullable:true})
    skills?: UserUpdateskillsInput;

    @Field(() => UserUpdateyubikeysInput, {nullable:true})
    yubikeys?: UserUpdateyubikeysInput;

    @Field(() => ArticleUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    articles?: ArticleUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => ExperienceUncheckedUpdateManyWithoutUserInput, {nullable:true})
    experiences?: ExperienceUncheckedUpdateManyWithoutUserInput;

    @Field(() => CertificationUncheckedUpdateManyWithoutUserInput, {nullable:true})
    certifications?: CertificationUncheckedUpdateManyWithoutUserInput;

    @Field(() => ProjectUncheckedUpdateManyWithoutUserInput, {nullable:true})
    projects?: ProjectUncheckedUpdateManyWithoutUserInput;

    @Field(() => ConferenceUncheckedUpdateManyWithoutUserInput, {nullable:true})
    conferences?: ConferenceUncheckedUpdateManyWithoutUserInput;
}
