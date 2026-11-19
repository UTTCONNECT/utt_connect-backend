import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateUserIdentityDto {
  @IsUUID()
  userId: string;

  @IsInt()
  @Min(1)
  providerId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255) // verificar longitud en 001_auth.sql
  providerSubject: string;

  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  @IsEmail()
  providerEmail?: string;

  @IsOptional()
  @IsObject()
  claimsSnapshot?: Record<string, unknown>;
}