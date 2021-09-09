import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserCreateprofileHighlightsInput } from '../prisma/user-createprofile-highlights.input';
import { UserCreateskillsInput } from '../prisma/user-createskills.input';
import { UserCreateyubikeysInput } from '../prisma/user-createyubikeys.input';
import { UserCreateprofessionalMembershipsInput } from '../prisma/user-createprofessional-memberships.input';
import { ExperienceUncheckedCreateNestedManyWithoutUserInput } from '../experience/experience-unchecked-create-nested-many-without-user.input';
import { EducationUncheckedCreateNestedManyWithoutUserInput } from '../education/education-unchecked-create-nested-many-without-user.input';
import { CertificationUncheckedCreateNestedManyWithoutUserInput } from '../certification/certification-unchecked-create-nested-many-without-user.input';
import { ProjectUncheckedCreateNestedManyWithoutUserInput } from '../project/project-unchecked-create-nested-many-without-user.input';
import { ConferenceUncheckedCreateNestedManyWithoutUserInput } from '../conference/conference-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutArticlesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    passwordHash!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    middleName?: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    linkedin?: string;

    @Field(() => String, {nullable:true})
    github?: string;

    @Field(() => String, {nullable:true})
    profilePicture?: string;

    @Field(() => String, {nullable:false})
    profile!: string;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateprofileHighlightsInput, {nullable:true})
    profileHighlights?: UserCreateprofileHighlightsInput;

    @Field(() => UserCreateskillsInput, {nullable:true})
    skills?: UserCreateskillsInput;

    @Field(() => UserCreateyubikeysInput, {nullable:true})
    yubikeys?: UserCreateyubikeysInput;

    @Field(() => UserCreateprofessionalMembershipsInput, {nullable:true})
    professionalMemberships?: UserCreateprofessionalMembershipsInput;

    @Field(() => ExperienceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => EducationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    educations?: EducationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CertificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ConferenceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    conferences?: ConferenceUncheckedCreateNestedManyWithoutUserInput;
}
