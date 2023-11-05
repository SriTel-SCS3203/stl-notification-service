import { Test, TestingModule } from '@nestjs/testing';
import { WebpushnotificationService } from './webpushnotification.service';

describe('WebpushnotificationService', () => {
  let service: WebpushnotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebpushnotificationService],
    }).compile();

    service = module.get<WebpushnotificationService>(WebpushnotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
