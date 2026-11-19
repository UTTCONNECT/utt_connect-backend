import { Transform } from 'class-transformer';
import { IsEmail, Matches } from 'class-validator';

export class RequestMagicLinkDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  @Matches(/@utt\.edu\.mx$/i, {
    message: 'Solo se aceptan correos institucionales @utt.edu.mx',
  })
  email: string;
}