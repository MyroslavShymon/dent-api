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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from '../../../database';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';

@ApiTags('Ролі')
@Controller('role')
export class RoleController {
  constructor(
    @Inject(ROLE_SERVICE_TOKEN)
    private roleService: RoleServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити роль' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() roleDto: any) {
    return this.roleService.create(roleDto);
  }

  @ApiOperation({ summary: 'Отримати всі ролі' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get()
  getAll() {
    return this.roleService.findAll();
  }

  @ApiOperation({ summary: 'Отримати роль по id' })
  @ApiResponse({ status: 200, type: Role })
  @Get(':id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.roleService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити всі ролі' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.roleService.remove();
  }

  @ApiOperation({ summary: 'Видалити роль по id' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.roleService.removeById(params.id);
  }
}
