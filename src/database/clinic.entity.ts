import {
  Column,
  Entity,
  // JoinTable,
  // ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
// import { User } from './user.entity';

@Entity()
@Unique(['title'])
export class Clinic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 200, nullable: false, unique: true })
  public title: string;

  @Column({ type: 'text' })
  public about: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  public logo?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  public background?: string;

  // @ManyToMany(() => User, (user: User) => user.roles, { onDelete: 'CASCADE' })
  // @JoinTable()
  // public users: User[];
}
