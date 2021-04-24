import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import { UsersService } from '../users/users.service';
import { User } from '../users/dto/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly $jwtService: JwtService,
    private readonly $usersService: UsersService
  ) {}

  public async validateUser(email: string, password: string): Promise<any | null> {
    const user = await this.$usersService.findOne({
      where: {
        email
      },
      select: {
        id: true,
        email: true,
        passwordHash: true,
        role: true
      }
    });

    if(user?.passwordHash) {
      const isValidPassword = await argon2.verify(user.passwordHash, password);

      if(isValidPassword) {
        const { passwordHash, ...result } = user;
        return result;
      }
    }

    return null;
  }

  public async login(user: User) {
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role
    };

    return {
      access_token: this.$jwtService.sign(payload)
    }
  }
}
