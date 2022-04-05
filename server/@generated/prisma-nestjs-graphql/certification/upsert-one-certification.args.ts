import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationWhereUniqueInput } from './certification-where-unique.input';
import { CertificationCreateInput } from './certification-create.input';
import { CertificationUpdateInput } from './certification-update.input';

@ArgsType()
export class UpsertOneCertificationArgs {

    @Field(() => CertificationWhereUniqueInput, {nullable:false})
    where!: CertificationWhereUniqueInput;

    @Field(() => CertificationCreateInput, {nullable:false})
    create!: CertificationCreateInput;

    @Field(() => CertificationUpdateInput, {nullable:false})
    update!: CertificationUpdateInput;
}
