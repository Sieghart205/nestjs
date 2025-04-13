import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProject {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  userId: number;
}
