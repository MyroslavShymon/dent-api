import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Clinic } from './clinic.entity';
import { Work } from './work.entity';
import { Order } from './order.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class PriceList {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id!: number;

  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор роботи' })
  @Column()
  public workId!: number;

  @ApiProperty({
    example: '1',
    description: 'Унікальний ідентифікатор клініки',
  })
  @Column()
  public clinicId!: number;

  @ApiProperty({ example: 3455, description: 'Ціна' })
  @Column()
  public price!: number;

  @ManyToOne(() => Work, (work: Work) => work.priceList, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public work!: Work;

  @ManyToOne(() => Clinic, (clinic: Clinic) => clinic.priceList, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public clinic!: Clinic;

  @OneToMany(() => Order, (order: Order) => order.priceList, {
    onDelete: 'CASCADE',
  })
  public orders!: Order[];
}
