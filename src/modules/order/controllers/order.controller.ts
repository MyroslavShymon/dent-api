import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from '../environment';
import {
  BaseParamRequestInterface,
  ORDER_SERVICE_TOKEN,
  OrderServiceInterface,
} from '../../../core';
import { Order } from '../../../database';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';

@ApiTags('Замовлення')
@Controller('order')
export class OrderController {
  constructor(
    @Inject(ORDER_SERVICE_TOKEN)
    private orderService: OrderServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити замовлення' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() orderDto: CreateOrderDto) {
    return this.orderService.create(orderDto);
  }

  @ApiOperation({ summary: 'Отримати всі замовлення' })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.orderService.findAll();
  }

  @ApiOperation({ summary: 'Отримати замовлення по id' })
  @ApiResponse({ status: 200 })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.orderService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити всі замовлення' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.orderService.remove();
  }

  @ApiOperation({ summary: 'Отримати замовлення по id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.orderService.removeById(params.id);
  }
}
