import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsIP,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateAuditEventDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  eventTypeCode!: string;

  @IsOptional()
  @IsUUID()
  actorUserId?: string;

  @IsOptional()
  @IsUUID()
  subjectUserId?: string;

  @IsOptional()
  @IsUUID()
  magicLinkRequestId?: string;

  @IsOptional()
  @IsUUID()
  correlationId?: string;

  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @MaxLength(80)
  resourceType?: string;

  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @MaxLength(255)
  resourceId?: string;

  @IsOptional()
  @IsIP()
  sourceIp?: string;

  @IsOptional()
  @IsString()
  userAgent?: string;

  @IsBoolean()
  succeeded!: boolean;

  @IsOptional()
  @IsObject()
  payload?: Record<string, any>;
}