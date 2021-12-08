import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateClinicPostCommentDto {
  @ApiProperty({
    example: 'Найкраща клініка в світі',
    description: 'Текст поста',
  })
  @IsNotEmpty()
  public text: string;

  @ApiProperty({
    example: 5,
    description: 'id поста',
  })
  @IsNotEmpty()
  public postId: number;

  @ApiProperty({
    example: 6,
    description: 'id користувача',
  })
  @IsNotEmpty()
  public userId: number;
}
