import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';
import { CertificationCreateWithoutUserInput } from './certification-create-without-user.input';

@InputType()
export class CertificationCreateOrConnectWithoutUserInput {

    @Field(() => CertificationWhereUniqueInput, {nullable:false})
    where!: CertificationWhereUniqueInput;

    @Field(() => CertificationCreateWithoutUserInput, {nullable:false})
    create!: CertificationCreateWithoutUserInput;
}
