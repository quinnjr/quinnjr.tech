import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { Experience } from './dto/experience';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ExperiencesService {
  constructor(
    private readonly $database: DatabaseService
  ) {}

  public async findOne(params: {
    where: Prisma.ExperienceWhereUniqueInput;
  }): Promise<Experience> {
    return await this.$database.experience.findUnique(params);
  }

  public async findMany(params: {
    where?: Prisma.ExperienceWhereInput;
  }): Promise<Experience[]> {
    return await this.$database.experience.findMany(params);
  }
}
