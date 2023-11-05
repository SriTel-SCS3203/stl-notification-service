import { ArrayNotEmpty, IsArray } from 'class-validator';
import { SMSDto } from './sms.dto';
import { ApiProperty } from '@nestjs/swagger';

export class SMSBatchDto {
  @ApiProperty({
    example: [
      {
        to: '94714673892',
        message: 'This is the message',
      },
      {
        to: '94714673892',
        message: 'This is the message',
      },
    ],
  })
  @IsArray()
  @ArrayNotEmpty()
  readonly sms: SMSDto[];
}
