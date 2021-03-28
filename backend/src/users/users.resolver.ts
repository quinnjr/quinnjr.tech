import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { User } from './dto/user';
import { ArticlesService } from '../articles/articles.service';
import { Article } from '../articles/dto/article';
import { Public } from '../auth/public.decorator';
import { Experience } from '../experiences/dto/experience';
import { ExperiencesService } from '../experiences/experiences.service';
import { ProjectsService } from '../projects/projects.service';
import { EducationService } from '../education/education.service';
import { CertificationsService } from '../certifications/certifications.service';
import { Certification } from 'src/certifications/dto/certification';
import { Education } from 'src/education/dto/education';
import { Project } from 'src/projects/dto/project';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly $usersService: UsersService,
    private readonly $articlesService: ArticlesService,
    private readonly $certificationsService: CertificationsService,
    private readonly $educationService: EducationService,
    private readonly $experiencesService: ExperiencesService,
    private readonly $projectsService: ProjectsService
  ) {}

  @Public()
  @Query(returns => User, { name: 'user' })
  public async getUser(@Args('id') id: string): Promise<User> {
    return this.$usersService.findOne({
      where: {
        id
      }
    });
  }

  @ResolveField('articles', returns => [Article])
  public async getArticles(@Parent() user: User): Promise<Article[]> {
    const { id } = user;
    return this.$articlesService.findMany({
      where: {
        authorId: id
      }
    });
  }

  @ResolveField('certifications', returns => [Certification])
  public async getCertifications(@Parent() user: User): Promise<Certification[]> {
    const { id } = user;
    return this.$certificationsService.findMany({
      where: {
        userId: id
      }
    });
  }

  @ResolveField('educations', returns => [Education])
  public async getEducations(@Parent() user: User): Promise<Education[]> {
    const { id } = user;
    return this.$educationService.findMany({
      where: {
        userId: id
      }
    });
  }

  @ResolveField('experiences', returns => [Experience])
  public async getExperiences(@Parent() user: User): Promise<Experience[]> {
    const { id } = user;
    return this.$experiencesService.findMany({
      where: {
        userId: id
      }
    });
  }

  @ResolveField('projects', returns => [Project])
  public async getProjects(@Parent() user: User): Promise<Project[]> {
    const { id } = user;
    return this.$projectsService.findMany({
      where: {
        userId: id
      }
    });
  }
}
