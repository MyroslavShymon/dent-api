import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  BaseParamRequestInterface,
  CLINIC_POST_SERVICE_TOKEN,
} from '../../../core';
import { ClinicPostServiceInterface } from '../../../core';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';
import { ClinicPost } from '../../../database';
import { CreateClinicPostDto } from '../environment';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Пости клініки')
@Controller('clinic-post')
export class ClinicPostController {
  constructor(
    @Inject(CLINIC_POST_SERVICE_TOKEN)
    private clinicPostService: ClinicPostServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити пост клініку' })
  @ApiResponse({ status: 200, type: ClinicPost })
  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  create(
    @Body() clinicPostDto: CreateClinicPostDto,
    @UploadedFile() photo: Express.Multer.File,
  ) {
    return this.clinicPostService.create({
      ...clinicPostDto,
      photo,
    });
  }

  @ApiOperation({ summary: 'Отримати всі пости всіх клінік' })
  @ApiResponse({ status: 200, type: [ClinicPost] })
  @Get()
  getAll() {
    return this.clinicPostService.findAll();
  }

  @ApiOperation({ summary: 'Отримати всі пости клініки конкретної' })
  @ApiResponse({ status: 200, type: [ClinicPost] })
  @Get('clinic/:id')
  getPostsByClinicId(@Param() params: BaseParamRequestInterface) {
    return this.clinicPostService.findPostsByClinicId(params.id);
  }

  @ApiOperation({ summary: 'Отримати пост по id' })
  @ApiResponse({ status: 200, type: ClinicPost })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.clinicPostService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити пости всіх фірм' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.clinicPostService.remove();
  }

  @ApiOperation({ summary: 'Видалити пост клініки по id' })
  @ApiResponse({ status: 200, type: ClinicPost })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.clinicPostService.removeById(params.id);
  }
}
