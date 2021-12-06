import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

export class CreateUserDto {
  @ApiProperty({ example: 'Myroslav Shymon', description: "Ім'я" })
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    example: 'myroslavshymon@gmail.com',
    description: 'Електронна адреса',
  })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({ example: 'qwerty12345', description: 'Пароль' })
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(100)
  password: string;

  @ApiProperty({ example: 'avatar.jpg', description: 'Аватар користувача' })
  avatar?: Express.Multer.File;

  @ApiProperty({
    example: 'background.jpg',
    description: 'Задня заставка користувача',
  })
  background?: Express.Multer.File;
}
