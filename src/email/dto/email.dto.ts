import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class EmailDto {
  @IsString()
  @IsNotEmpty()
  readonly to: string;

  @IsString()
  @IsNotEmpty()
  readonly subject: string;

  @IsString()
  @IsNotEmpty()
  readonly body: string;
}
