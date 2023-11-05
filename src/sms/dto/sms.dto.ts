import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SMSDto {
  @ApiProperty({ example: '94714673892' })
  @IsString()
  @IsNotEmpty()
  readonly to: string;

  @ApiProperty({ example: 'This is the message' })
  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
