import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExperienceCreateWithoutUserInput } from './experience-create-without-user.input';
import { ExperienceCreateOrConnectWithoutUserInput } from './experience-create-or-connect-without-user.input';
import { ExperienceCreateManyUserInputEnvelope } from './experience-create-many-user-input-envelope.input';
import { ExperienceWhereUniqueInput } from './experience-where-unique.input';

@InputType()
export class ExperienceUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ExperienceCreateWithoutUserInput], {nullable:true})
    create?: Array<ExperienceCreateWithoutUserInput>;

    @Field(() => [ExperienceCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ExperienceCreateOrConnectWithoutUserInput>;

    @Field(() => ExperienceCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ExperienceCreateManyUserInputEnvelope;

    @Field(() => [ExperienceWhereUniqueInput], {nullable:true})
    connect?: Array<ExperienceWhereUniqueInput>;
}
