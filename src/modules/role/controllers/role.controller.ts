import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import {
  BaseParamRequestInterface,
  ROLE_SERVICE_TOKEN,
  RoleServiceInterface,
} from '../../../core';

@Controller('role')
export class RoleController {
  constructor(
    @Inject(ROLE_SERVICE_TOKEN)
    private roleService: RoleServiceInterface,
  ) {}

  @Post()
  create(@Body() roleDto: any) {
    return this.roleService.create(roleDto);
  }

  @Get()
  getAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.roleService.findOneById(params.id);
  }

  @Delete()
  delete() {
    return this.roleService.remove();
  }

  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.roleService.removeById(params.id);
  }
}
