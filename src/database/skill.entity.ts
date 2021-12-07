import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity()
export class Skill {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ example: 'Обробляти коронки', description: 'назва уміння' })
  @Column({ type: 'varchar', length: 200, nullable: false })
  public title: string;

  @ApiProperty({
    example: 'Цей скіл дозволяє обробляти коронкки',
    description: 'пояснення уміння',
  })
  @Column({ type: 'text' })
  public description: string;

  @ManyToMany(() => User, (user: User) => user.skills, { onDelete: 'CASCADE' })
  @JoinTable()
  public users: User[];
}
