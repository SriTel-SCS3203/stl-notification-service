import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';
import { WebpushnotificationController } from './webpushnotification/webpushnotification.controller';
import { WebpushnotificationModule } from './webpushnotification/webpushnotification.module';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: String(process.env.MAIL_USER),
          pass: String(process.env.MAIL_PASS),
        },
      },
    }),
    EmailModule,
    WebpushnotificationModule,
  ],
  controllers: [AppController, EmailController, WebpushnotificationController],
  providers: [AppService, EmailService],
})
export class AppModule {}
