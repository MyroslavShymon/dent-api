import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './environment/services';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  create(@Body() roleDto: any) {
    return this.roleService.create(roleDto);
  }

  @Get()
  getAll() {
    return this.roleService.getAll();
  }
}
