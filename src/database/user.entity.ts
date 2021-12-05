import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  public email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  public name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  public password: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  public avatar?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  public background?: string;

  @ManyToMany(() => Role, (role: Role) => role.users, { onDelete: 'CASCADE' })
  public roles: Role[];
}
