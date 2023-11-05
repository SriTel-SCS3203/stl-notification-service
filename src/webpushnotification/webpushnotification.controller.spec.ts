import { Test, TestingModule } from '@nestjs/testing';
import { WebpushnotificationController } from './webpushnotification.controller';

describe('WebpushnotificationController', () => {
  let controller: WebpushnotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebpushnotificationController],
    }).compile();

    controller = module.get<WebpushnotificationController>(
      WebpushnotificationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
