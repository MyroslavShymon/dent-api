import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: 'Зробити круо',
    description: 'Текст замовлення',
  })
  @IsNotEmpty()
  public description: string;

  @ApiProperty({
    example: 5,
    description: "id pricelist'a",
  })
  @IsNotEmpty()
  public priceListId: number;

  @ApiProperty({
    example: 'B2',
    description: 'колір зуба',
  })
  @IsNotEmpty()
  public color: string;

  @ApiProperty({
    example: 6,
    description: 'кількість зубів',
  })
  @IsNotEmpty()
  public count: number;

  @ApiProperty({
    example: 6,
    description: 'id замовника',
  })
  @IsNotEmpty()
  public customerId: number;

  @ApiProperty({
    example: 6,
    description: 'id виконавця',
  })
  public performerId?: number;
}
