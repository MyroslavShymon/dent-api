import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
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
}
