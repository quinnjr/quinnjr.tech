import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EducationCreateManyactivitiesInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
