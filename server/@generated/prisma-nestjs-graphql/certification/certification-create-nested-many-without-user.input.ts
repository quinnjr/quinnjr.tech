import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CertificationCreateWithoutUserInput } from './certification-create-without-user.input';
import { CertificationCreateOrConnectWithoutUserInput } from './certification-create-or-connect-without-user.input';
import { CertificationCreateManyUserInputEnvelope } from './certification-create-many-user-input-envelope.input';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';

@InputType()
export class CertificationCreateNestedManyWithoutUserInput {

    @Field(() => [CertificationCreateWithoutUserInput], {nullable:true})
    create?: Array<CertificationCreateWithoutUserInput>;

    @Field(() => [CertificationCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CertificationCreateOrConnectWithoutUserInput>;

    @Field(() => CertificationCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CertificationCreateManyUserInputEnvelope;

    @Field(() => [CertificationWhereUniqueInput], {nullable:true})
    connect?: Array<CertificationWhereUniqueInput>;
}
