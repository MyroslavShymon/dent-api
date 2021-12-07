import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ClinicPost } from './clinic-post.entity';
import { Clinic } from './clinic.entity';
import { User } from './user.entity';

@Entity()
export class ClinicPostComment {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({
    example: 'Круто',
    description: 'Текст комента',
  })
  @Column({ type: 'text' })
  public text: string;

  @ApiProperty({
    example: 5,
    description: 'id поста',
  })
  @ManyToOne(() => ClinicPost, (posts) => posts.comments)
  public post: ClinicPost;

  @ApiProperty({
    example: 2,
    description: 'id надсилача комента',
  })
  @Column({ type: 'numeric', nullable: true })
  public userId: number;

  // @ManyToMany(() => User, (user: User) => user.roles, { onDelete: 'CASCADE' })
  // @JoinTable()
  // public users: User[];
}
