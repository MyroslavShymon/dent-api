import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 200, nullable: false })
  public title: string;

  @Column({ type: 'text' })
  public description: string;

  @ManyToMany(() => User, (user: User) => user.roles, { onDelete: 'CASCADE' })
  @JoinTable()
  public users: User[];
}
