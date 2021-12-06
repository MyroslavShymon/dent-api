import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClinicDto {
  @ApiProperty({ example: 'Best Dentists', description: 'Назва клініки' })
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @ApiProperty({
    example: 'Найкраща клініка в світі',
    description: 'Про клініку',
  })
  @IsNotEmpty()
  about: string;

  @ApiProperty({ example: 'logo.jpg', description: 'Лого фірми' })
  logo?: Express.Multer.File;

  @ApiProperty({
    example: 'background.jpg',
    description: 'Задня заставка клініки',
  })
  background?: Express.Multer.File;
}
