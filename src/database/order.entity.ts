import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PriceList } from './priceList.entity';

@Entity()
export class Order {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({
    example: 'Доробити всю верхню підкову в високій якості',
    description: 'Пояснення що треба зробити, ремарка',
  })
  @Column({ type: 'text' })
  public description: string;

  @ApiProperty({
    example: true,
    description: 'Чи заказ активний',
  })
  @Column({ type: 'boolean', default: true })
  public isActive: boolean;

  @ApiProperty({
    example: true,
    description: 'Чи заказ прийнятий',
  })
  @Column({ type: 'boolean', default: false })
  public isAccept: boolean;

  @ApiProperty({
    example: true,
    description: 'Чи заказ закріплений',
  })
  @Column({ type: 'boolean', default: false })
  public isPinned: boolean;

  @ApiProperty({
    example: 5,
    description: 'Кількість зубів',
  })
  @Column({ type: 'numeric', default: 1 })
  public count: number;

  @ApiProperty({
    example: 'B1',
    description: 'Колір зубів',
  })
  @Column({ type: 'varchar', default: 'A2', length: 2 })
  public color: string;

  @ApiProperty({
    example: 2,
    description: 'id замовника',
  })
  @Column({ type: 'numeric' })
  public customerId: number;

  @ApiProperty({
    example: 2,
    description: 'id виконавця',
  })
  @Column({ type: 'numeric', nullable: true })
  public performerId: number;

  @ApiProperty({
    example: new Date(),
    description: 'Дата початку виконання замовлення',
  })
  @Column('timestamp')
  public startTime: Date;

  @ApiProperty({
    example: new Date(),
    description: 'Дата закінчення виконання замовлення',
  })
  @Column({ type: 'timestamp', precision: 6, nullable: true })
  public endTime: Date;

  @ApiProperty({
    example: 4,
    description: 'id з прайслиста',
  })
  @ManyToOne(() => PriceList, (priceList) => priceList.orders)
  public priceList: PriceList;
}
