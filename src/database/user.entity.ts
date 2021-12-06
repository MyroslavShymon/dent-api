import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';
import { ApiProperty } from '@nestjs/swagger';

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
}
