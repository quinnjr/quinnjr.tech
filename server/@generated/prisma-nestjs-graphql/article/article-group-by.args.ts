import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByInput } from './article-order-by.input';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';
import { ArticleScalarWhereWithAggregatesInput } from './article-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';

@ArgsType()
export class ArticleGroupByArgs {

    @Field(() => ArticleWhereInput, {nullable:true})
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByInput], {nullable:true})
    orderBy?: Array<ArticleOrderByInput>;

    @Field(() => [ArticleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ArticleScalarFieldEnum>;

    @Field(() => ArticleScalarWhereWithAggregatesInput, {nullable:true})
    having?: ArticleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ArticleCountAggregateInput, {nullable:true})
    _count?: ArticleCountAggregateInput;

    @Field(() => ArticleMinAggregateInput, {nullable:true})
    _min?: ArticleMinAggregateInput;

    @Field(() => ArticleMaxAggregateInput, {nullable:true})
    _max?: ArticleMaxAggregateInput;
}
