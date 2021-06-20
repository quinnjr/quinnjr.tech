import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Certification, CreateCertification } from '../dto/certification';
import { Public } from '../auth/public.decorator';
import { User } from '../dto/user';
import { CurrentUser } from '../auth/current-user.decorator';
import { DatabaseService } from '../database/database.service';

@Resolver(of => Certification)
export class CertificationsResolver {
  constructor(
    private readonly $databaseService: DatabaseService
  ) {}

  @ResolveField('user', returns => User)
  public async getUser(@Parent() certification: Certification): Promise<User> {
    const { userId } = certification;
    return this.$databaseService.user.findUnique({
      where: {
        id: userId
      }
    });
  }


  @Public()
  @Query(returns => [Certification], { name: 'certifications' })
  public async getCertifications(@Args('userId') userId: string): Promise<Certification[] | null> {
    return this.$databaseService.certification.findMany({
      where: {
        userId
      }
    });
  }

  @Public()
  @Query(returns => Certification, { name: 'certification' })
  public async getCertification(@Args('id') id: string): Promise<Certification | null> {
    return this.$databaseService.certification.findUnique({
      where: {
        id
      }
    })
  }


  @Mutation(returns => Certification)
  public async createCertification(
    @CurrentUser() user: User,
    @Args('data') data: CreateCertification
  ): Promise<Certification | null> {
    return this.$databaseService.certification.create({
      data: {
        name: data.name,
        certifier: data.certifier,
        user: {
          connect: {
            id: user.id
          }
        }
      }
    });
  }
}
