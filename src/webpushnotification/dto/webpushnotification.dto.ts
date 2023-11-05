import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WebPushNotificationDto {
  @ApiProperty({ example: 'This is the title' })
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({ example: 'This is the body' })
  @IsString()
  @IsNotEmpty()
  readonly body: string;
}
