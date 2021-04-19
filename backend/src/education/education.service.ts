import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { DatabaseService } from '../database/database.service';
import { Education } from './dto/education';

@Injectable()
export class EducationService {
  constructor(
    private readonly $database: DatabaseService
  ) {}

  public async findOne(params: {
    where: Prisma.EducationWhereUniqueInput;
  }): Promise<Education> {
    return await this.$database.education.findUnique(params);
  }

  public async findMany(params: {
    where?: Prisma.EducationWhereInput;
  }): Promise<Education[]> {
    return await this.$database.education.findMany(params);
  }
}
