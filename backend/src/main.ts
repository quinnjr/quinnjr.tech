declare var expect: any;

import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap(): Promise<INestApplication> {
  let httpsOptions;
  if(process.env.NODE_ENV === 'development') {
    httpsOptions = {
      key: fs.readFileSync('../certs/localhost+2-key.pem'),
      cert: fs.readFileSync('../certs/localhost+2.pem')
    }
  }

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'warn'],
    httpsOptions
  });

  app.set('trust proxy', 1);
  app.useGlobalPipes(new ValidationPipe({
    transform: false,
    whitelist: true
  }));

  const configService = app.get<ConfigService>(ConfigService);

  if(!configService.get<string>('DATABASE_URL')) {
    throw new Error('Environment variable `DATABASE_URL` is not defined.');
  }

  if(!configService.get<string>('REDIS_HOST')) {
    throw new Error('Environment variable `REDIS_HOST` is not defined.');
  }

  if(!configService.get<string>('JWT_SECRET')) {
    throw new Error('Environment variable `JWT_SECRET` is not defined.');
  }

  if(!configService.get<string>('SECRET_KEY')) {
    throw new Error('Environment variable `SECRET_KEY` is not defined.');
  }

  return app;
}

if(typeof expect === 'undefined') {
  bootstrap()
    .then(app => app.listen(3000))
    .catch(console.error);
}



