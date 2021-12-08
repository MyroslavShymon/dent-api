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
  WORK_TYPE_SERVICE_TOKEN,
  WorkTypeServiceInterface,
} from '../../../core';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';
import { CreateWorkTypeDto } from '../environment';

@Controller('work-type')
export class WorkTypeController {
  constructor(
    @Inject(WORK_TYPE_SERVICE_TOKEN)
    private workTypeService: WorkTypeServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити тип роботи' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() workTypeDto: CreateWorkTypeDto) {
    return this.workTypeService.create(workTypeDto);
  }

  @ApiOperation({ summary: 'Отримати всі тип роботи' })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.workTypeService.findAll();
  }

  @ApiOperation({ summary: 'Отримати тип роботи по id' })
  @ApiResponse({ status: 200 })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.workTypeService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити всі тип роботи' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.workTypeService.remove();
  }

  @ApiOperation({ summary: 'Отримати тип роботи по id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.workTypeService.removeById(params.id);
  }
}
