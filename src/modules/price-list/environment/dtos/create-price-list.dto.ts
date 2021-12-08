import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePriceListDto {
  @ApiProperty({
    example: 5430,
    description: 'Ціна',
  })
  @IsNotEmpty()
  public price: number;

  @ApiProperty({
    example: 5,
    description: 'id клініки',
  })
  @IsNotEmpty()
  public clinicId: number;

  @ApiProperty({
    example: 6,
    description: 'id роботи',
  })
  @IsNotEmpty()
  public workId: number;
}
