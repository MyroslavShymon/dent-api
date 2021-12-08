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
  WORK_SERVICE_TOKEN,
  WorkServiceInterface,
} from '../../../core';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';
import { CreateWorkDto } from '../environment';

@ApiTags('Роботи')
@Controller('work')
export class WorkController {
  constructor(
    @Inject(WORK_SERVICE_TOKEN)
    private workService: WorkServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити роботу' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() workDto: CreateWorkDto) {
    return this.workService.create(workDto);
  }

  @ApiOperation({ summary: 'Отримати всі роботу' })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.workService.findAll();
  }

  @ApiOperation({ summary: 'Отримати роботу по id' })
  @ApiResponse({ status: 200 })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.workService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити всі роботу' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.workService.remove();
  }

  @ApiOperation({ summary: 'Отримати роботу по id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.workService.removeById(params.id);
  }
}
