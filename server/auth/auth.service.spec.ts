import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';

import { DatabaseService } from '../database/database.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     imports: [
  //       ConfigModule,
  //       JwtModule.registerAsync({
  //         imports: [ConfigModule],
  //         inject: [ConfigService],
  //         useFactory: async ($configService: ConfigService) => ({
  //           secret: $configService.get<string>('JWT_SECRET'),
  //           signOptions: {
  //             expiresIn: '7200s'
  //           }
  //         })
  //       }),
  //       PassportModule.register({
  //         session: false
  //       })
  //     ],
  //     providers: [AuthService, DatabaseService]
  //   }).compile();

  //   service = module.get<AuthService>(AuthService);
  // });

  it.skip('should be defined', () => {
    expect(service).toBeDefined();
  });
});
