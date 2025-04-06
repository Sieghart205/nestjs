import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsOptional()
  second_name?: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsOptional()
  second_last_name?: string;
}
