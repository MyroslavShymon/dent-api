import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ClinicPost } from './clinic-post.entity';
import { ClinicPostComment } from './clinic-post-comment.entity';
import { Administrator } from './administrator.entity';
import { Owner } from './owner.entity';
import { Skill } from './skill.entity';

@Entity()
export class User {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({
    example: 'myroslavshymon@gmail.com',
    description: 'Електронна адреса',
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  public email: string;

  @ApiProperty({ example: 'Myroslav Shymon', description: "Ім'я" })
  @Column({ type: 'varchar', length: 100, nullable: false })
  public name: string;

  @ApiProperty({ example: 'qwerty12345', description: 'Пароль' })
  @Column({ type: 'varchar', length: 100, nullable: false })
  public password: string;

  @ApiProperty({ example: 'avatar.jpg', description: 'Аватар користувача' })
  @Column({ type: 'varchar', length: 256, nullable: true })
  public avatar?: string;

  @ApiProperty({
    example: 'background.jpg',
    description: 'Задня заставка користувача',
  })
  @Column({ type: 'varchar', length: 256, nullable: true })
  public background?: string;

  @ManyToMany(() => Role, (role: Role) => role.users, { onDelete: 'CASCADE' })
  public roles: Role[];

  @OneToMany(
    () => Administrator,
    (administrator: Administrator) => administrator.user,
    {
      onDelete: 'CASCADE',
    },
  )
  public administrator!: Administrator[];

  @OneToMany(() => Owner, (owner: Owner) => owner.user, {
    onDelete: 'CASCADE',
  })
  public owner!: Owner[];

  @ManyToMany(() => Skill, (skill: Skill) => skill.users, {
    onDelete: 'CASCADE',
  })
  public skills: Skill[];
}
