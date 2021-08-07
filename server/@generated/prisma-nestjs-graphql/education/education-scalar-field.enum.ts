import { registerEnumType } from '@nestjs/graphql';

export enum EducationScalarFieldEnum {
    id = "id",
    name = "name",
    location = "location",
    degree = "degree",
    graduationYear = "graduationYear",
    activities = "activities",
    userId = "userId"
}

registerEnumType(EducationScalarFieldEnum, { name: 'EducationScalarFieldEnum' })
