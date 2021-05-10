import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import { UsersService } from '../users/users.service';
import { User } from '../users/dto/user';
import { YubikeyService } from './yubikey.service';
import { YubikeyException } from './yubikey-exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly $jwtService: JwtService,
    private readonly $usersService: UsersService,
    private readonly $yubikeyService: YubikeyService
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
        role: true,
        yubikeys: true
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

  public async login(user: User, otp: string): Promise<{access_token: string}> {
    if(user?.yubikeys && user.yubikeys.length > 0) {
      const clientId = otp.substr(0, 12);

      if(!user.yubikeys.includes(clientId)) {
        throw new HttpException('Invalid Yubikey client supplied', HttpStatus.FORBIDDEN);
      }

      const _isValid = await this.$yubikeyService.verify(otp);
    }

    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role
    };

    return {
      access_token: this.$jwtService.sign(payload)
    }
  }

  public async registerYubikey(user: User, otp: string): Promise<void> {
    try {
      const clientId = otp.substr(0, 12);

      if(user.yubikeys && user.yubikeys.length > 0) {
        if(user.yubikeys.includes(clientId)) {
          throw new HttpException('Yubikey is already registered', HttpStatus.CONFLICT);
        }
      }

      const isValid = await this.$yubikeyService.verify(otp);

      if(isValid) {
        const keys = (user.yubikeys.length > 0) ? user.yubikeys.push(clientId) : Array.from(clientId);
        user = await this.$usersService.update(user.id, {
          yubikeys: keys
        });
      }
    } catch(error: any) {
      throw error;
    }
  }
}
