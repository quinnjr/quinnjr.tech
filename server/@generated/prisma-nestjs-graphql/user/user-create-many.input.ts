import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserCreateManyprofileHighlightsInput } from './user-create-manyprofile-highlights.input';
import { UserCreateManyskillsInput } from './user-create-manyskills.input';
import { UserCreateManyyubikeysInput } from './user-create-manyyubikeys.input';
import { UserCreateManyprofessionalMembershipsInput } from './user-create-manyprofessional-memberships.input';

@InputType()
export class UserCreateManyInput {

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

    @Field(() => UserCreateManyprofileHighlightsInput, {nullable:true})
    profileHighlights?: UserCreateManyprofileHighlightsInput;

    @Field(() => UserCreateManyskillsInput, {nullable:true})
    skills?: UserCreateManyskillsInput;

    @Field(() => UserCreateManyyubikeysInput, {nullable:true})
    yubikeys?: UserCreateManyyubikeysInput;

    @Field(() => UserCreateManyprofessionalMembershipsInput, {nullable:true})
    professionalMemberships?: UserCreateManyprofessionalMembershipsInput;
}
