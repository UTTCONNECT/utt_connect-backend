import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateIdentityProviderDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50) 
  code: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255) 
  description: string;
}