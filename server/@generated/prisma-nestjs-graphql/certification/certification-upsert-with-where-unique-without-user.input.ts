import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';
import { CertificationUpdateWithoutUserInput } from './certification-update-without-user.input';
import { CertificationCreateWithoutUserInput } from './certification-create-without-user.input';

@InputType()
export class CertificationUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CertificationWhereUniqueInput, {nullable:false})
    where!: CertificationWhereUniqueInput;

    @Field(() => CertificationUpdateWithoutUserInput, {nullable:false})
    update!: CertificationUpdateWithoutUserInput;

    @Field(() => CertificationCreateWithoutUserInput, {nullable:false})
    create!: CertificationCreateWithoutUserInput;
}
