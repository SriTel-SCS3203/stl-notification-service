import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailDto } from './dto/email.dto';
import { EmailBatchDto } from './dto/emailBatch.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Post('send/single')
  @HttpCode(200)
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
  @HttpCode(200)
  @ApiOperation({ summary: 'Send multiple emails' })
  @ApiBody({
    type: EmailBatchDto,
    required: true,
    isArray: false,
  })
  sendMultipleEmail(@Body() emails: EmailBatchDto) {
    return this.emailService.sendMultipleEmails(emails);
  }
}
