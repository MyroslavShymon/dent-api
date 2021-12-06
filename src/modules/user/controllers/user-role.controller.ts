import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  USER_ROlE_SERVICE_TOKEN,
  UserRoleServiceInterface,
} from '../../../core';
import { ConnectUserRoleDto } from '../environment';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Користувачі-ролі')
@Controller('/user/role')
export class UserRoleController {
  constructor(
    @Inject(USER_ROlE_SERVICE_TOKEN)
    private userRoleService: UserRoleServiceInterface,
  ) {}

  //TODO fix
  @ApiOperation({ summary: "Створити з'єднання користувача з ролю" })
  @ApiResponse({
    status: 200,
    type: `{
      status: '200',
      message: 'Ви додали роль з id 2 користувачу з id 82',
    }`,
  })
  @Post()
  connectUserRole(@Body() userRoleDto: ConnectUserRoleDto) {
    return this.userRoleService.connectUserRole(userRoleDto);
  }
}
