import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateUserStatusDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255) // verificar longitud en 001_auth.sql
  description?: string;
}