import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { UsersService } from '../users/users.service';
import { Certification, CreateCertification } from './dto/certification';
import { CertificationsService } from './certifications.service';
import { Public } from '../auth/public.decorator';
import { User } from '../users/dto/user';
import { CurrentUser } from '../auth/current-user.decorator';

@Resolver(of => Certification)
export class CertificationsResolver {
  constructor(
    private readonly $certifactionsService: CertificationsService,
    private readonly $usersService: UsersService
  ) {}

  @Public()
  @Query(returns => [Certification], { name: 'certifications' })
  public async getCertifications(@Args('userId') userId: string): Promise<Certification[]> {
    return this.$certifactionsService.findMany({
      where: {
        userId
      }
    });
  }

  @Public()
  @Query(returns => Certification, { name: 'certification' })
  public async getCertification(@Args('id') id: string): Promise<Certification> {
    return this.$certifactionsService.findOne({
      where: {
        id
      }
    })
  }

  @ResolveField('user', returns => User)
  public async getUser(@Parent() certification: Certification): Promise<User> {
    const { userId } = certification;
    return this.$usersService.findOne({
      where: {
        id: userId
      }
    });
  }

  @Mutation(returns => Certification)
  public async createCertification(
    @CurrentUser() user: User,
    @Args('data') data: CreateCertification
  ): Promise<Certification> {
    Object.defineProperty(data, 'user', {
      value: {
        connect: {
          id: user.id
        }
      }
    });

    return this.$certifactionsService.create(data as Prisma.CertificationCreateInput);
  }
}
