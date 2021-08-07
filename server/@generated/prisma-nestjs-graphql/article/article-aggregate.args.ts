import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByInput } from './article-order-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';

@ArgsType()
export class ArticleAggregateArgs {

    @Field(() => ArticleWhereInput, {nullable:true})
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByInput], {nullable:true})
    orderBy?: Array<ArticleOrderByInput>;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    cursor?: ArticleWhereUniqueInput;

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
