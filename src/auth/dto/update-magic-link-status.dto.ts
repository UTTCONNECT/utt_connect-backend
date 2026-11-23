import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateMagicLinkStatusDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255) // verificar longitud en 001_auth.sql
  description?: string;

  @IsOptional()
  @IsBoolean()
  isTerminal?: boolean;
}