import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMagicLinkStatusDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  code: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255) 
  description: string;

  @IsBoolean()
  isTerminal: boolean;
}