import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';
import { CertificationUpdateWithoutUserInput } from './certification-update-without-user.input';

@InputType()
export class CertificationUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CertificationWhereUniqueInput, {nullable:false})
    where!: CertificationWhereUniqueInput;

    @Field(() => CertificationUpdateWithoutUserInput, {nullable:false})
    data!: CertificationUpdateWithoutUserInput;
}
