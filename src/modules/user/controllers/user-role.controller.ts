import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  USER_ROlE_SERVICE_TOKEN,
  UserRoleServiceInterface,
} from '../../../core';
import { ConnectUserRoleDto } from '../environment';

@Controller('/user/role')
export class UserRoleController {
  constructor(
    @Inject(USER_ROlE_SERVICE_TOKEN)
    private userRoleService: UserRoleServiceInterface,
  ) {}

  @Post()
  connectUserRole(@Body() userRoleDto: ConnectUserRoleDto) {
    return this.userRoleService.connectUserRole(userRoleDto);
  }
}
