import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CertificationScalarWhereInput } from './certification-scalar-where.input';
import { CertificationUpdateManyMutationInput } from './certification-update-many-mutation.input';

@InputType()
export class CertificationUpdateManyWithWhereWithoutUserInput {

    @Field(() => CertificationScalarWhereInput, {nullable:false})
    where!: CertificationScalarWhereInput;

    @Field(() => CertificationUpdateManyMutationInput, {nullable:false})
    data!: CertificationUpdateManyMutationInput;
}
