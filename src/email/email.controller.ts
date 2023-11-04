import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailDto } from './dto/email.dto';
import { EmailBatchDto } from './dto/emailBatch.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Post('send/single')
  sendSingleEmail(@Body() email: EmailDto) {
    return this.emailService.sendSingleEmail(email);
  }
  @Post('send/multiple')
  async sendMultipleEmail(@Body() emails: EmailBatchDto) {
    const failedEmails = await this.emailService.sendMultipleEmails(emails);
    return failedEmails.length > 0
      ? new InternalServerErrorException({
          message: 'Some emails failed to send',
          failedEmails,
        })
      : 'All emails sent successfully';
  }
}
