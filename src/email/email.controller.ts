import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailDto } from './dto/email.dto';
import { EmailBatchDto } from './dto/emailBatch.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Post('send/single')
  @ApiOperation({ summary: 'Send a single email' })
  @ApiBody({
    type: EmailDto,
    required: true,
    isArray: false,
  })
  sendSingleEmail(@Body() email: EmailDto) {
    return this.emailService.sendSingleEmail(email);
  }
  @Post('send/multiple')
  @ApiOperation({ summary: 'Send multiple emails' })
  @ApiBody({
    type: EmailBatchDto,
    required: true,
    isArray: false,
  })
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
