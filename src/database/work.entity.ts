import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { WorkType } from './work-type.entity';
import { PriceList } from './priceList.entity';

@Entity()
export class Work {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ example: 'Временка', description: 'назва роботи' })
  @Column({ type: 'varchar', length: 200, nullable: false })
  public title: string;

  @ApiProperty({
    example: 'Временка яка ставиться на деякий час',
    description: 'пояснення роботи',
  })
  @Column({ type: 'text', nullable: true })
  public description?: string;

  @ManyToOne(() => WorkType, (type) => type.works)
  public type: WorkType;

  @OneToMany(() => PriceList, (priceList: PriceList) => priceList.work, {
    onDelete: 'CASCADE',
  })
  public priceList!: PriceList[];
}
