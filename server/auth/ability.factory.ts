import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';

import { Article } from '../@generated/prisma-nestjs-graphql/article/article.model';
import { Certification } from '../@generated/prisma-nestjs-graphql/certification/certification.model';
import { Education } from '../@generated/prisma-nestjs-graphql/education/education.model';
import { Experience } from '../@generated/prisma-nestjs-graphql/experience/experience.model';
import { Project } from '../@generated/prisma-nestjs-graphql/project/project.model';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';

import { Action } from './ability';

type Subjects = InferSubjects<
  | typeof Article
  | typeof Certification
  | typeof Education
  | typeof Experience
  | typeof Project
  | typeof User
  | 'all'
>;

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  public createForUser(user: {
    id: string;
    email: string;
    role: Role;
  }): AppAbility {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (user.role === Role.Admin) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'all');
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>
    });
  }
}
