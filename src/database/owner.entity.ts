import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Clinic } from './clinic.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Owner {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id!: number;

  @ApiProperty({
    example: '1',
    description: 'Унікальний ідентифікатор засновника',
  })
  @Column()
  public userId!: number;

  @ApiProperty({
    example: '1',
    description: 'Унікальний ідентифікатор клініки',
  })
  @Column()
  public clinicId!: number;

  @ManyToOne(() => User, (user: User) => user.owner, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public user!: User;

  @ManyToOne(() => Clinic, (clinic: Clinic) => clinic.owner, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public clinic!: Clinic;
}
