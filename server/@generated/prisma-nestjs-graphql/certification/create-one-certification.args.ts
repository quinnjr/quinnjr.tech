import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationCreateInput } from './certification-create.input';

@ArgsType()
export class CreateOneCertificationArgs {

    @Field(() => CertificationCreateInput, {nullable:false})
    data!: CertificationCreateInput;
}
