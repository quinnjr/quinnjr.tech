import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EducationCreateWithoutUserInput } from './education-create-without-user.input';
import { EducationCreateOrConnectWithoutUserInput } from './education-create-or-connect-without-user.input';
import { EducationCreateManyUserInputEnvelope } from './education-create-many-user-input-envelope.input';
import { EducationWhereUniqueInput } from './education-where-unique.input';

@InputType()
export class EducationUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [EducationCreateWithoutUserInput], {nullable:true})
    create?: Array<EducationCreateWithoutUserInput>;

    @Field(() => [EducationCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EducationCreateOrConnectWithoutUserInput>;

    @Field(() => EducationCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EducationCreateManyUserInputEnvelope;

    @Field(() => [EducationWhereUniqueInput], {nullable:true})
    connect?: Array<EducationWhereUniqueInput>;
}
