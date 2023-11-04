import { IsArray, ValidateNested } from '@nestjs/class-validator';
import { EmailDto } from './email.dto';
import { ArrayNotEmpty } from 'class-validator';

export class EmailBatchDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  readonly emails: EmailDto[];
}
