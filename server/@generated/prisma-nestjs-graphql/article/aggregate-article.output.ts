import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArticleCountAggregate } from './article-count-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';

@ObjectType()
export class AggregateArticle {

    @Field(() => ArticleCountAggregate, {nullable:true})
    _count?: ArticleCountAggregate;

    @Field(() => ArticleCountAggregate, {nullable:true})
    count?: ArticleCountAggregate;

    @Field(() => ArticleMinAggregate, {nullable:true})
    _min?: ArticleMinAggregate;

    @Field(() => ArticleMinAggregate, {nullable:true})
    min?: ArticleMinAggregate;

    @Field(() => ArticleMaxAggregate, {nullable:true})
    _max?: ArticleMaxAggregate;

    @Field(() => ArticleMaxAggregate, {nullable:true})
    max?: ArticleMaxAggregate;
}
