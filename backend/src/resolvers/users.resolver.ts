import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { User } from '../dto/user';
import { Article } from '../dto/article';
import { Public } from '../auth/public.decorator';
import { Experience } from '../dto/experience';
import { Certification } from '../dto/certification';
import { Education } from '../dto/education';
import { Project } from '../dto/project';
import { DatabaseService } from '../database/database.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly $databaseService: DatabaseService
  ) {}

  @Public()
  @Query(returns => User, { name: 'user' })
  public async getUser(
    @Args('id', { nullable: true }) id?: string,
    @Args('firstName', { nullable: true }) firstName?: string,
    @Args('lastName', { nullable: true }) lastName?: string,
    @Args('email', { nullable: true }) email?: string
  ): Promise<User> {
    return this.$databaseService.user.findUnique({
      where: {
        id,
        firstName,
        lastName,
        email
      }
    });
  }

  @ResolveField('articles', returns => [Article])
  public async getArticles(@Parent() user: User): Promise<Article[]> {
    const { id } = user;
    return this.$databaseService.article.findMany({
      where: {
        authorId: id
      }
    });
  }

  @ResolveField('certifications', returns => [Certification])
  public async getCertifications(@Parent() user: User): Promise<Certification[]> {
    const { id } = user;
    return this.$databaseService.certification.findMany({
      where: {
        userId: id
      }
    });
  }

  @ResolveField('educations', returns => [Education])
  public async getEducations(@Parent() user: User): Promise<Education[]> {
    const { id } = user;
    return this.$databaseService.education.findMany({
      where: {
        userId: id
      }
    });
  }

  @ResolveField('experiences', returns => [Experience])
  public async getExperiences(@Parent() user: User): Promise<Experience[]> {
    const { id } = user;
    return this.$databaseService.experience.findMany({
      where: {
        userId: id
      }
    });
  }

  @ResolveField('projects', returns => [Project])
  public async getProjects(@Parent() user: User): Promise<Project[]> {
    const { id } = user;
    return this.$databaseService.project.findMany({
      where: {
        userId: id
      }
    });
  }
}
