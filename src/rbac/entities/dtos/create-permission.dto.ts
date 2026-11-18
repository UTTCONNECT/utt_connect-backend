
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreatePermissionDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value
  )
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  @Matches(/^[a-z][a-z0-9_.:-]{2,127}$/)
  code!: string;

  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value
  )
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  description!: string;
}
