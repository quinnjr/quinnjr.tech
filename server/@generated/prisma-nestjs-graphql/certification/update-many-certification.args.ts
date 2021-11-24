import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationUpdateManyMutationInput } from './certification-update-many-mutation.input';
import { CertificationWhereInput } from './certification-where.input';

@ArgsType()
export class UpdateManyCertificationArgs {

    @Field(() => CertificationUpdateManyMutationInput, {nullable:false})
    data!: CertificationUpdateManyMutationInput;

    @Field(() => CertificationWhereInput, {nullable:true})
    where?: CertificationWhereInput;
}
