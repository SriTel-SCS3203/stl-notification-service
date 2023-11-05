import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
  @ApiProperty({ example: 'email@example.com' })
  @IsString()
  @IsNotEmpty()
  readonly to: string;

  @ApiProperty({ example: 'this is the subject od the email' })
  @IsString()
  @IsNotEmpty()
  readonly subject: string;

  @ApiProperty({ example: 'this is the body of the email' })
  @IsString()
  @IsNotEmpty()
  readonly body: string;
}
