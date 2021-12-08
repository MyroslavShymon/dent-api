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
  PRICE_LIST_SERVICE_TOKEN,
  PriceListServiceInterface,
} from '../../../core';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';
import { CreatePriceListDto } from '../environment';

@ApiTags('Прайс лісти')
@Controller('price-list')
export class PriceListController {
  constructor(
    @Inject(PRICE_LIST_SERVICE_TOKEN)
    private priceListService: PriceListServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити засновника' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() priceListDto: CreatePriceListDto) {
    return this.priceListService.create(priceListDto);
  }

  @ApiOperation({ summary: 'Отримати всі засновника' })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.priceListService.findAll();
  }

  @ApiOperation({ summary: 'Отримати засновника по id' })
  @ApiResponse({ status: 200 })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.priceListService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити всі засновника' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.priceListService.remove();
  }

  @ApiOperation({ summary: 'Отримати засновника по id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.priceListService.removeById(params.id);
  }
}
