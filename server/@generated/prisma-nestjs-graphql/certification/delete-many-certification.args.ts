import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationWhereInput } from './certification-where.input';

@ArgsType()
export class DeleteManyCertificationArgs {

    @Field(() => CertificationWhereInput, {nullable:true})
    where?: CertificationWhereInput;
}
