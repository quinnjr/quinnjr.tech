import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { ProjectsService } from './projects.service';
import { Public } from '../auth/public.decorator';
import { Project } from './dto/project';

@Resolver(of => Project)
export class ProjectsResolver {
  constructor(
    private readonly $projectsService: ProjectsService
  ) {}

  @Public()
  @Query(returns => [Project], { name: 'projects' })
  public async getProjects(
    @Args('userId', { nullable: true }) userId?: string,
    @Args('take', { type: () => Int, nullable: true}) take?: number
  ): Promise<Project[]> {
    return this.$projectsService.findMany({
      where: {
        userId
      },
      take
    })
  }
}
