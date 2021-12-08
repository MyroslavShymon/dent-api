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
  ADMINISTRATOR_SERVICE_TOKEN,
  AdministratorServiceInterface,
} from '../../../core';
import { CreateAdministratorDto } from '../environment';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';

@ApiTags('Засновник')
@Controller('administrator')
export class AdministratorController {
  constructor(
    @Inject(ADMINISTRATOR_SERVICE_TOKEN)
    private administratorService: AdministratorServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити адміністратора' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() administratorDto: CreateAdministratorDto) {
    return this.administratorService.create(administratorDto);
  }

  @ApiOperation({ summary: 'Отримати всі адміністратора' })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.administratorService.findAll();
  }

  @ApiOperation({ summary: 'Отримати адміністратора по id' })
  @ApiResponse({ status: 200 })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.administratorService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити всі адміністратора' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.administratorService.remove();
  }

  @ApiOperation({ summary: 'Отримати адміністратора по id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.administratorService.removeById(params.id);
  }
}
