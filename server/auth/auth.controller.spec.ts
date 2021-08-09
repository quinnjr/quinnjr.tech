import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { DatabaseService } from '../database/database.service';

describe('AuthController', () => {
  let controller: AuthController;

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
  //     controllers: [AuthController],
  //     providers: [AuthService, DatabaseService]
  //   }).compile();

  //   controller = module.get<AuthController>(AuthController);
  // });

  it.skip('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
