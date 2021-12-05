import { IsNotEmpty, IsNumber } from 'class-validator';

export class ConnectUserRoleDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  roleId: number;
}
