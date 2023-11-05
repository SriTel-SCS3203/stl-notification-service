import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';
import { EmailBatchDto } from './dto/emailBatch.dto';

@Injectable()
export class EmailService {
  sendSingleEmail(email: EmailDto) {
    if (this.generateResult()) {
      return { message: 'Email sent successfully' };
    } else {
      throw new InternalServerErrorException({
        message: 'Email failed to send',
        email,
      });
    }
  }

  sendMultipleEmails(emails: EmailBatchDto) {
    const failedEmails = [];
    emails.emails.forEach((email) => {
      if (!this.generateResult()) {
        failedEmails.push(email);
      }
    });
    if (failedEmails.length > 0) {
      return new InternalServerErrorException({
        message: 'Some emails failed to send',
        failedEmails,
      });
    } else {
      return { message: 'All emails sent successfully' };
    }
  }
  generateResult() {
    if (Math.random() < 0.9) {
      return true;
    } else {
      return false;
    }
  }
}
