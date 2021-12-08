import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateWorkTypeDto {
  @ApiProperty({ example: 'Сканіровка', description: 'назва типу роботи' })
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example: 'Сканіровка для сканування зубів',
    description: 'пояснення для чого існує такий тип роботи',
  })
  public description?: string;
}
