import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Article } from '../article/article.model';
import { Experience } from '../experience/experience.model';
import { Education } from '../education/education.model';
import { Certification } from '../certification/certification.model';
import { Project } from '../project/project.model';
import { Conference } from '../conference/conference.model';

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    passwordHash!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:true})
    middleName!: string | null;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    profilePicture!: string | null;
    @Field(() => String, {nullable:false})
    profile!: string;
    @Field(() => Date, {nullable:false,defaultValue:'1970-01-01T00:00:00+00:00'})
    birthday!: Date;
    @Field(() => [String], {nullable:true})
    skills!: Array<string>;
    @Field(() => [String], {nullable:true})
    yubikeys!: Array<string>;
    @Field(() => Role, {nullable:false,defaultValue:'User'})
    role!: keyof typeof Role;
    @Field(() => [Article], {nullable:true})
    articles?: Array<Article>;
    @Field(() => [Experience], {nullable:true})
    experiences?: Array<Experience>;
    @Field(() => [Education], {nullable:true})
    eductations?: Array<Education>;
    @Field(() => [Certification], {nullable:true})
    certifications?: Array<Certification>;
    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;
    @Field(() => [Conference], {nullable:true})
    conferences?: Array<Conference>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
