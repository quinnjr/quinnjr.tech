import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Public } from '../auth/public.decorator';
import { DatabaseService } from '../database/database.service';

import { User } from '../../graphql/user/user.model';
import { Article } from '../../graphql/article/article.model';
import { Education } from '../../graphql/education/education.model';
import { Experience } from '../../graphql/experience/experience.model';
import { Certification } from '../../graphql/certification/certification.model';
import { Project } from '../../graphql/project/project.model';

@Resolver((of: any) => User)
export class UsersResolver {
  constructor(/*private readonly $databaseService: DatabaseService*/) {}

  @Query((returns) => User, { name: 'user' })
  public async getUser(@Args('email') email: string): Promise<User | null> {
    // const user = await this.$databaseService.user.findUnique({
    //   where: {
    //     email
    //   }
    // });

    // if (!user) {
    //   throw new Error('No user was found');
    // } else {
    //   return user;
    // }
    return null;
  }

  @ResolveField('articles', (returns) => [Article])
  public async getArticles(@Parent() user: User): Promise<Article[] | null> {
    const { id } = user;
    // return this.$databaseService.article.findMany({
    //   where: {
    //     authorId: id
    //   }
    // });
    return null;
  }

  @ResolveField('certifications', (returns) => [Certification])
  public async getCertifications(
    @Parent() user: User
  ): Promise<Certification[] | null> {
    const { id } = user;
    // return this.$databaseService.certification.findMany({
    //   where: {
    //     userId: id
    //   }
    // });
    return null;
  }

  @ResolveField('educations', (returns) => [Education])
  public async getEducations(@Parent() user: User): Promise<Education[] | null> {
    const { id } = user;
    // return this.$databaseService.education.findMany({
    //   where: {
    //     userId: id
    //   }
    // });
    return null;
  }

  @ResolveField('experiences', (returns) => [Experience])
  public async getExperiences(@Parent() user: User): Promise<Experience[] | null> {
    const { id } = user;
    // return this.$databaseService.experience.findMany({
    //   where: {
    //     userId: id
    //   }
    // });
    return null;
  }

  @ResolveField('projects', (returns) => [Project])
  public async getProjects(@Parent() user: User): Promise<Project[] | null> {
    const { id } = user;
    // return this.$databaseService.project.findMany({
    //   where: {
    //     userId: id
    //   }
    // });
    return null;
  }
}
