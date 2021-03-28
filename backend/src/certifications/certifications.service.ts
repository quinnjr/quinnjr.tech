import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Certification } from './dto/certification';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CertificationsService {
  constructor(
    private readonly $database: DatabaseService
  ) {}

  public async findOne(params: {
    where: Prisma.CertificationWhereUniqueInput;
  }): Promise<Certification> {
    return await this.$database.certification.findUnique(params);
  }

  public async findMany(params: {
    where?: Prisma.CertificationWhereInput;
    skip?: number;
  }): Promise<Certification[]> {
    return await this.$database.certification.findMany(params);
  }

  public async create(data: Prisma.CertificationCreateInput): Promise<Certification> {
    return this.$database.certification.create({data});
  }

  public async update(id: string, data: Prisma.CertificationUpdateInput) {
    return this.$database.certification.update({
      where: { id },
      data
    });
  }

  public async delete(id: string): Promise<Certification> {
    return this.$database.certification.delete({
      where: { id }
    });
  }
}
