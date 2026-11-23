import { Transform } from 'class-transformer';
import { IsEmail, IsObject, IsOptional } from 'class-validator';

export class UpdateUserIdentityDto {
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