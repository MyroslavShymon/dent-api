import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConnectUserRoleDto {
  @ApiProperty({ example: 1, description: 'Id користувача' })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({ example: 2, description: 'Id ролі' })
  @IsNotEmpty()
  @IsNumber()
  roleId: number;
}
