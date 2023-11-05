import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SMSDto } from './dto/sms.dto';
import { SMSBatchDto } from './dto/smsbatch.dto';

@Injectable()
export class SmsService {
  sendASMS(sms: SMSDto) {
    if (this.generateResult()) {
      return { message: 'SMS sent successfully' };
    } else {
      return new InternalServerErrorException({
        message: 'SMS failed to send',
        sms,
      });
    }
  }
  sendMultipleSMS(sms: SMSBatchDto) {
    const failedSMS = [];
    sms.sms.forEach((sms) => {
      if (!this.generateResult()) {
        failedSMS.push(sms);
      }
    });
    return failedSMS.length > 0
      ? new InternalServerErrorException({
          message: 'Some SMS failed to send',
          failedSMS,
        })
      : { message: 'All SMS sent successfully' };
  }
  generateResult() {
    if (Math.random() < 0.9) {
      return true;
    } else {
      return false;
    }
  }
}
