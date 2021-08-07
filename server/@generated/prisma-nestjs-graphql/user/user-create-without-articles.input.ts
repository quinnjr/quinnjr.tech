import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserCreateskillsInput } from '../prisma/user-createskills.input';
import { UserCreateyubikeysInput } from '../prisma/user-createyubikeys.input';
import { ExperienceCreateNestedManyWithoutUserInput } from '../experience/experience-create-nested-many-without-user.input';
import { EducationCreateNestedManyWithoutUserInput } from '../education/education-create-nested-many-without-user.input';
import { CertificationCreateNestedManyWithoutUserInput } from '../certification/certification-create-nested-many-without-user.input';
import { ProjectCreateNestedManyWithoutUserInput } from '../project/project-create-nested-many-without-user.input';
import { ConferenceCreateNestedManyWithoutUserInput } from '../conference/conference-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutArticlesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    passwordHash!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    middleName?: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

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

    @Field(() => UserCreateskillsInput, {nullable:true})
    skills?: UserCreateskillsInput;

    @Field(() => UserCreateyubikeysInput, {nullable:true})
    yubikeys?: UserCreateyubikeysInput;

    @Field(() => ExperienceCreateNestedManyWithoutUserInput, {nullable:true})
    experiences?: ExperienceCreateNestedManyWithoutUserInput;

    @Field(() => EducationCreateNestedManyWithoutUserInput, {nullable:true})
    eductations?: EducationCreateNestedManyWithoutUserInput;

    @Field(() => CertificationCreateNestedManyWithoutUserInput, {nullable:true})
    certifications?: CertificationCreateNestedManyWithoutUserInput;

    @Field(() => ProjectCreateNestedManyWithoutUserInput, {nullable:true})
    projects?: ProjectCreateNestedManyWithoutUserInput;

    @Field(() => ConferenceCreateNestedManyWithoutUserInput, {nullable:true})
    conferences?: ConferenceCreateNestedManyWithoutUserInput;
}
