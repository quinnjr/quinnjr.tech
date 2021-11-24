import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CertificationCreateManyUserInput } from './certification-create-many-user.input';

@InputType()
export class CertificationCreateManyUserInputEnvelope {

    @Field(() => [CertificationCreateManyUserInput], {nullable:false})
    data!: Array<CertificationCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
