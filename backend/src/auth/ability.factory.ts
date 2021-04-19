import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { Role } from '@prisma/client';


import { Article } from '../articles/dto/article';
import { Certification } from "../certifications/dto/certification";
import { Education } from "../education/dto/education";
import { Experience } from "../experiences/dto/experience";
import { Project } from "../projects/dto/project";
import { User } from '../users/dto/user';

import { Action } from './ability';


type Subjects = InferSubjects<
  typeof Article |
  typeof Certification |
  typeof Education |
  typeof Experience |
  typeof Project |
  typeof User |
  'all'
>;

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  public createForUser(user: {
    id: string,
    email: string,
    role: Role
  }): AppAbility {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if(user.role === Role.Admin) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'all');
    }

    return build({
      detectSubjectType: item => item.constructor as ExtractSubjectType<Subjects>
    });
  }
}
