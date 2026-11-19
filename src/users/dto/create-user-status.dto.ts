import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserStatusDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  code: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255) 
  description: string;
}