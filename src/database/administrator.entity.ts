import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Clinic } from './clinic.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Administrator {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id!: number;

  @ApiProperty({
    example: '1',
    description: 'Унікальний ідентифікатор користувача',
  })
  @Column()
  public userId!: number;

  @ApiProperty({
    example: '1',
    description: 'Унікальний ідентифікатор клініки',
  })
  @Column()
  public clinicId!: number;

  @ManyToOne(() => User, (user: User) => user.administrator, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public user!: User;

  @ManyToOne(() => Clinic, (clinic: Clinic) => clinic.administrator, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public clinic!: Clinic;
}
