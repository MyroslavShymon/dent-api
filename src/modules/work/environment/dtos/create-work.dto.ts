import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateWorkDto {
  @ApiProperty({ example: 'Временка', description: 'назва роботи' })
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example: 'Временка яка ставиться на деякий час',
    description: 'пояснення роботи',
  })
  public description?: string;

  @ApiProperty({
    example: 6,
    description: 'id типу роботи',
  })
  @IsNotEmpty()
  public typeId: number;
}
