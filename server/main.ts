import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

/* eslint prefer-arrow/prefer-arrow-functions: "off" */
async function bootstrap(): Promise<NestExpressApplication> {
  let httpsOptions;

  if (process.env.ENV === 'development') {
    httpsOptions = {
      key: fs.readFileSync('./certs/localhost+2-key.pem'),
      cert: fs.readFileSync('./certs/localhost+2.pem')
    };
  }

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'warn'],
    httpsOptions,
    cors: process.env.ENV === 'development'
  });

  app.set('trust proxy', 1);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: false,
      whitelist: true
    })
  );

  const config = app.get<ConfigService>(ConfigService);

  if (!config.get<string>('DATABASE_URL')) {
    console.error('Environment variable `DATABASE_URL` was not set');
    process.exit(1);
  }

  if (!config.get<string>('JWT_SECRET')) {
    console.error('Environment variable `JWT_SECRET` was not set');
    process.exit(1);
  }

  if (!config.get<string>('SECRET_KEY')) {
    console.error('Environment variable `SECRET_KEY` was not set');
    process.exit(1);
  }

  if (
    !config.get<string>('YUBIKEY_CLIENT_ID') ||
    !config.get<string>('YUBIKEY_CLIENT_SECRET')
  ) {
    console.error('Environment variables for Yubikey were not set');
    process.exit(1);
  }

  return app;
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
/* eslint @typescript-eslint/naming-convention: "off" */
/* eslint no-underscore-dangle: "off" */
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap()
    .then((app) => app.listen(process.env.PORT || 3000))
    .catch(console.error);
}
