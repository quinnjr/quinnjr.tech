import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CertificationCreateManyInput } from './certification-create-many.input';

@ArgsType()
export class CreateManyCertificationArgs {

    @Field(() => [CertificationCreateManyInput], {nullable:false})
    data!: Array<CertificationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
