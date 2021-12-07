import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Work } from './work.entity';

@Entity()
export class WorkType {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ example: 'Сканіровка', description: 'назва типу роботи' })
  @Column({ type: 'varchar', length: 200, nullable: false })
  public title: string;

  @ApiProperty({
    example: 'Сканіровка для сканування зубів',
    description: 'пояснення для чого існує такий тип роботи',
  })
  @Column({ type: 'text', nullable: true })
  public description?: string;

  @OneToMany(() => Work, (work) => work.type)
  public works: Work[];
}
