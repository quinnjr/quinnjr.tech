import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';

@ArgsType()
export class DeleteOneCertificationArgs {

    @Field(() => CertificationWhereUniqueInput, {nullable:false})
    where!: CertificationWhereUniqueInput;
}
