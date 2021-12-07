import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Clinic } from './clinic.entity';
import { ClinicPostComment } from './clinic-post-comment.entity';

@Entity()
export class ClinicPost {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({
    example: 'Найкраща клініка в світі',
    description: 'Текст поста',
  })
  @Column({ type: 'text' })
  public text: string;

  @ApiProperty({
    example: 'some-photo.jpg',
    description: 'Фото прикріплене до поста',
  })
  @Column({ type: 'varchar', length: 256, nullable: true })
  public photo?: string;

  @ManyToOne(() => Clinic, (clinic) => clinic.posts)
  public clinic: Clinic;

  @OneToMany(() => ClinicPostComment, (comment) => comment.post)
  public comments: ClinicPostComment[];

  // @ManyToMany(() => User, (user: User) => user.roles, { onDelete: 'CASCADE' })
  // @JoinTable()
  // public users: User[];
}
