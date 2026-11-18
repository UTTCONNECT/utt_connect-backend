import { IsDateString, IsOptional } from 'class-validator';

export class UpdateUserRoleDto {
  @IsOptional()
  @IsDateString()
  expiresAt?: string | null;
}
