import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    passwordHash = "passwordHash",
    firstName = "firstName",
    middleName = "middleName",
    lastName = "lastName",
    profilePicture = "profilePicture",
    profile = "profile",
    birthday = "birthday",
    skills = "skills",
    yubikeys = "yubikeys",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' })
