import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserCreateskillsInput } from '../prisma/user-createskills.input';
import { UserCreateyubikeysInput } from '../prisma/user-createyubikeys.input';
import { ArticleUncheckedCreateNestedManyWithoutAuthorInput } from '../article/article-unchecked-create-nested-many-without-author.input';
import { ExperienceUncheckedCreateNestedManyWithoutUserInput } from '../experience/experience-unchecked-create-nested-many-without-user.input';
import { CertificationUncheckedCreateNestedManyWithoutUserInput } from '../certification/certification-unchecked-create-nested-many-without-user.input';
import { ProjectUncheckedCreateNestedManyWithoutUserInput } from '../project/project-unchecked-create-nested-many-without-user.input';
import { ConferenceUncheckedCreateNestedManyWithoutUserInput } from '../conference/conference-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutEductationsInput {

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

    @Field(() => ArticleUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => ExperienceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CertificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    certifications?: CertificationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ConferenceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    conferences?: ConferenceUncheckedCreateNestedManyWithoutUserInput;
}
