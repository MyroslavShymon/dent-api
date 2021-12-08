import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  BaseParamRequestInterface,
  OWNER_SERVICE_TOKEN,
  OwnerServiceInterface,
} from '../../../core';
import { CreateOwnerDto } from '../environment';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';

@ApiTags('Засновник')
@Controller('owner')
export class OwnerController {
  constructor(
    @Inject(OWNER_SERVICE_TOKEN)
    private ownerService: OwnerServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити засновника' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() ownerDto: CreateOwnerDto) {
    return this.ownerService.create(ownerDto);
  }

  @ApiOperation({ summary: 'Отримати всі засновника' })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.ownerService.findAll();
  }

  @ApiOperation({ summary: 'Отримати засновника по id' })
  @ApiResponse({ status: 200 })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.ownerService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити всі засновника' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.ownerService.remove();
  }

  @ApiOperation({ summary: 'Отримати засновника по id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.ownerService.removeById(params.id);
  }
}
