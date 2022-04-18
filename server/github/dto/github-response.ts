import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GithubRepository {
  @Field()
  description!: string;

  @Field()
  name!: string;

  @Field()
  url!: string;

  constructor({ node }: any) {
    this.description = node.description;
    this.name = node.name;
    this.url = node.url;
  }
}

@ObjectType()
export class GithubGist {
  @Field((returns) => ID)
  id!: string;

  @Field()
  description!: string;

  @Field()
  name!: string;

  @Field()
  url!: string;
}

@ObjectType()
export class GithubResponse {
  @Field({ nullable: true })
  public url?: string;

  @Field((returns) => [GithubGist], { nullable: true })
  public gists?: GithubGist[];

  @Field((returns) => [GithubRepository], { nullable: true })
  public repositories?: GithubRepository[];

  constructor(data: any) {
    this.url = data.viewer.url || null;
    this.gists = data.viewer.gists || null;

    this.repositories = data.viewer.repositories.edges.map(
      (val: any) => (val = new GithubRepository(val))
    );
  }
}
