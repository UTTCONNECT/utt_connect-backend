import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateIdentityProviderDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50) // verificar longitud en 001_auth.sql
  code?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255) // verificar longitud en 001_auth.sql
  description?: string;
}