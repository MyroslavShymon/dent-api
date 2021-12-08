import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAdministratorDto {
  @ApiProperty({
    example: 5,
    description: 'id клініки',
  })
  @IsNotEmpty()
  public clinicId: number;

  @ApiProperty({
    example: 6,
    description: 'id користувача',
  })
  @IsNotEmpty()
  public userId: number;
}
