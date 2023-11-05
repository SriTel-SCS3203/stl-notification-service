import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { WebpushnotificationController } from './webpushnotification/webpushnotification.controller';
import { WebpushnotificationModule } from './webpushnotification/webpushnotification.module';
import { SmsController } from './sms/sms.controller';
import { SmsModule } from './sms/sms.module';
@Module({
  imports: [EmailModule, WebpushnotificationModule, SmsModule],
  controllers: [
    AppController,
    EmailController,
    WebpushnotificationController,
    SmsController,
  ],
  providers: [AppService, EmailService],
})
export class AppModule {}
