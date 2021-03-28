import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class GithubRepository {
  @Field()
  description: string;

  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType()
export class GithubGist {
  @Field(returns => ID)
  id: string;

  @Field()
  description: string;

  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType()
export class GithubResponse {
  @Field()
  public url: string;

  @Field(returns => [GithubGist])
  public gists: GithubGist[]

  @Field(returns => [GithubRepository])
  public respositories: GithubRepository[];

}
