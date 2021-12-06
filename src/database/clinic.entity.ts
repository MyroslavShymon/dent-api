import {
  Column,
  Entity,
  // JoinTable,
  // ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
// import { User } from './user.entity';

@Entity()
@Unique(['title'])
export class Clinic {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ example: 'Best Dentists', description: 'Назва клініки' })
  @Column({ type: 'varchar', length: 200, nullable: false, unique: true })
  public title: string;

  @ApiProperty({
    example: 'Найкраща клініка в світі',
    description: 'Про клініку',
  })
  @Column({ type: 'text' })
  public about: string;

  @ApiProperty({ example: 'logo.jpg', description: 'Лого фірми' })
  @Column({ type: 'varchar', length: 256, nullable: true })
  public logo?: string;

  @ApiProperty({
    example: 'background.jpg',
    description: 'Задня заставка клініки',
  })
  @Column({ type: 'varchar', length: 256, nullable: true })
  public background?: string;

  // @ManyToMany(() => User, (user: User) => user.roles, { onDelete: 'CASCADE' })
  // @JoinTable()
  // public users: User[];
}
