import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SMSDto } from './dto/sms.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { SMSBatchDto } from './dto/smsbatch.dto';

@Controller('sms')
export class SmsController {
  constructor(readonly smsService: SmsService) {}
  @Post('send/single')
  @HttpCode(200)
  @ApiOperation({ summary: 'Send a single SMS' })
  @ApiBody({
    type: SMSDto,
    required: true,
    isArray: false,
  })
  sendASMS(@Body() sms: SMSDto) {
    return this.smsService.sendASMS(sms);
  }
  @Post('send/multiple')
  @HttpCode(200)
  @ApiOperation({ summary: 'Send multiple SMS' })
  @ApiBody({
    type: SMSBatchDto,
    required: true,
    isArray: false,
  })
  sendMultipleSMS(@Body() sms: SMSBatchDto) {
    return this.smsService.sendMultipleSMS(sms);
  }
}
