import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule
      ],
      controllers: [
        AppController
      ],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.index).toBeDefined();
    });
  });
});
