import { ArrayNotEmpty, IsArray } from '@nestjs/class-validator';
import { WebPushNotificationDto } from './webpushnotification.dto';
import { ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WebPushNotificationBatchDto {
  @ApiProperty({
    example: [
      {
        title: 'This is the title',
        body: 'This is the body',
      },
      {
        title: 'This is the title',
        body: 'This is the body',
      },
    ],
  })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  readonly notifications: WebPushNotificationDto[];
}
