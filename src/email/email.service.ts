import { MailerService as Mailer } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';
import { EmailBatchDto } from './dto/emailBatch.dto';

@Injectable()
export class EmailService {
  constructor(private readonly mailerMain: Mailer) {}

  async sendSingleEmail(email: EmailDto) {
    return await this.mailerMain
      .sendMail({
        to: email.to,
        subject: email.subject,
        text: email.body,
      })
      .then((success) => {
        console.log(success);
      });
  }

  async sendMultipleEmails(emails: EmailBatchDto) {
    const failedEmails = [];
    for (const email of emails.emails) {
      await this.mailerMain
        .sendMail({
          to: email.to,
          subject: email.subject,
          text: email.body,
        })
        .catch((error) => {
          console.log(error);
          failedEmails.push(email.to);
        });
    }
    return failedEmails;
  }
}
