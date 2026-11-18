import { IsDateString, IsOptional, IsUUID } from 'class-validator';

export class CreateUserRoleDto {
  @IsUUID()
  userId!: string;

  @IsUUID()
  roleId!: string;

  @IsOptional()
  @IsDateString()
  expiresAt?: string | null;
}
