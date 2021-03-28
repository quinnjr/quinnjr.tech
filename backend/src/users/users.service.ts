import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { DatabaseService } from '../database/database.service';
import { User } from './dto/user';

@Injectable()
export class UsersService {
  constructor(
    private readonly $database: DatabaseService
  ) {}

  public async findOne(params: {
    where: Prisma.UserWhereUniqueInput;
    select?: Prisma.UserSelect;
  }): Promise<User> {
    const { where, select } = params;

    let user = await this.$database.user.findUnique(params) as User;

    return user;
  }

  public async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.$database.user.create({data}) as User;
  }

  public async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return await this.$database.user.update({
      where: { id },
      data
    }) as User;
  }
}
