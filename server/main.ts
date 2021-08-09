import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

/* eslint prefer-arrow/prefer-arrow-functions: "off" */
async function bootstrap(): Promise<NestExpressApplication> {

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'warn'],
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
    .then((app) => app.listen(process.env.PORT || 4200))
    .catch(console.error);
}
