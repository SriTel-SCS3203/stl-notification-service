import { IsArray, ValidateNested } from '@nestjs/class-validator';
import { EmailDto } from './email.dto';
import { ArrayNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailBatchDto {
  @ApiProperty({
    example: [
      {
        to: 'email1@example.com',
        subject: 'this is the subject of the email',
        body: 'this is the body of the email',
      },
      {
        to: 'email2@example.com',
        subject: 'this is the subject of the email',
        body: 'this is the body of the email',
      },
    ],
  })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  readonly emails: EmailDto[];
}
