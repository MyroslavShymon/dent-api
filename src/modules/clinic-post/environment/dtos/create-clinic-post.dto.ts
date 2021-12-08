import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClinicPostDto {
  @ApiProperty({
    example: 'Найкраща клініка в світі',
    description: 'Текст поста',
  })
  @IsNotEmpty()
  public text: string;

  @ApiProperty({
    example: 'some-photo.jpg',
    description: 'Фото прикріплене до поста',
  })
  public photo?: Express.Multer.File;

  @ApiProperty({
    example: 5,
    description: 'id клініки',
  })
  @IsNotEmpty()
  public clinicId: number;
}
