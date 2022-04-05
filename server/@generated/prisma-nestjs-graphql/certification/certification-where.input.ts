import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class CertificationWhereInput {

    @Field(() => [CertificationWhereInput], {nullable:true})
    AND?: Array<CertificationWhereInput>;

    @Field(() => [CertificationWhereInput], {nullable:true})
    OR?: Array<CertificationWhereInput>;

    @Field(() => [CertificationWhereInput], {nullable:true})
    NOT?: Array<CertificationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    certifier?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
