import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Role {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ example: 'User', description: 'назва ролі' })
  @Column({ type: 'varchar', length: 200, nullable: false })
  public title: string;

  @ApiProperty({
    example: 'Роль по замовчуванню',
    description: 'пояснення для чого існує роль',
  })
  @Column({ type: 'text' })
  public description: string;

  @ManyToMany(() => User, (user: User) => user.roles, { onDelete: 'CASCADE' })
  @JoinTable()
  public users: User[];
}
