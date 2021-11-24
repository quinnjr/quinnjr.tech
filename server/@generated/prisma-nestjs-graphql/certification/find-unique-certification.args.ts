import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';

@ArgsType()
export class FindUniqueCertificationArgs {

    @Field(() => CertificationWhereUniqueInput, {nullable:false})
    where!: CertificationWhereUniqueInput;
}
