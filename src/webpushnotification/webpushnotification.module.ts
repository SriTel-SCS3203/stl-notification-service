import { Module } from '@nestjs/common';
import { WebpushnotificationService } from './webpushnotification.service';

@Module({
  providers: [WebpushnotificationService],
  exports: [WebpushnotificationService],
})
export class WebpushnotificationModule {}
