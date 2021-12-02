import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsNotEmpty()
  description: string;
}
