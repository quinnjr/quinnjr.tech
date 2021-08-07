import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationUpdateInput } from './certification-update.input';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';

@ArgsType()
export class UpdateOneCertificationArgs {

    @Field(() => CertificationUpdateInput, {nullable:false})
    data!: CertificationUpdateInput;

    @Field(() => CertificationWhereUniqueInput, {nullable:false})
    where!: CertificationWhereUniqueInput;
}
