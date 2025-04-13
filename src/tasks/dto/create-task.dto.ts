import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTask {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  @IsOptional()
  projectId?: number;
}
