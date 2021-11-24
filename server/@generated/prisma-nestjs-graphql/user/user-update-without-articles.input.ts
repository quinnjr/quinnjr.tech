import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { UserUpdateprofileHighlightsInput } from '../prisma/user-updateprofile-highlights.input';
import { UserUpdateskillsInput } from '../prisma/user-updateskills.input';
import { UserUpdateyubikeysInput } from '../prisma/user-updateyubikeys.input';
import { UserUpdateprofessionalMembershipsInput } from '../prisma/user-updateprofessional-memberships.input';
import { ExperienceUpdateManyWithoutUserInput } from '../experience/experience-update-many-without-user.input';
import { EducationUpdateManyWithoutUserInput } from '../education/education-update-many-without-user.input';
import { CertificationUpdateManyWithoutUserInput } from '../certification/certification-update-many-without-user.input';
import { ProjectUpdateManyWithoutUserInput } from '../project/project-update-many-without-user.input';
import { ConferenceUpdateManyWithoutUserInput } from '../conference/conference-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutArticlesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @HideField()
    passwordHash?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    middleName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    linkedin?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    github?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => UserUpdateprofileHighlightsInput, {nullable:true})
    profileHighlights?: UserUpdateprofileHighlightsInput;

    @Field(() => UserUpdateskillsInput, {nullable:true})
    skills?: UserUpdateskillsInput;

    @Field(() => UserUpdateyubikeysInput, {nullable:true})
    yubikeys?: UserUpdateyubikeysInput;

    @Field(() => UserUpdateprofessionalMembershipsInput, {nullable:true})
    professionalMemberships?: UserUpdateprofessionalMembershipsInput;

    @Field(() => ExperienceUpdateManyWithoutUserInput, {nullable:true})
    experiences?: ExperienceUpdateManyWithoutUserInput;

    @Field(() => EducationUpdateManyWithoutUserInput, {nullable:true})
    educations?: EducationUpdateManyWithoutUserInput;

    @Field(() => CertificationUpdateManyWithoutUserInput, {nullable:true})
    certifications?: CertificationUpdateManyWithoutUserInput;

    @Field(() => ProjectUpdateManyWithoutUserInput, {nullable:true})
    projects?: ProjectUpdateManyWithoutUserInput;

    @Field(() => ConferenceUpdateManyWithoutUserInput, {nullable:true})
    conferences?: ConferenceUpdateManyWithoutUserInput;
}
