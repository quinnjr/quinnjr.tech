import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { DatabaseService } from '../database/database.service';
import { Project } from './dto/project';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly $database: DatabaseService
  ) {}

  public async findOne(params: {
    where: Prisma.ProjectWhereUniqueInput;
  }): Promise<Project> {
    return await this.$database.project.findUnique(params);
  }

  public async findMany(params: {
    where?: Prisma.ProjectWhereInput;
    take?: number;
  }): Promise<Project[]> {
    return await this.$database.project.findMany(params);
  }
}
