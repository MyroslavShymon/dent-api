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
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  BaseParamRequestInterface,
  CLINIC_SERVICE_TOKEN,
  ClinicServiceInterface,
} from '../../../core';
import { CreateClinicDto } from '../environment';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Clinic } from '../../../database';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';

@ApiTags('Клініка')
@Controller('clinic')
export class ClinicController {
  constructor(
    @Inject(CLINIC_SERVICE_TOKEN)
    private clinicService: ClinicServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити клініку' })
  @ApiResponse({ status: 200, type: Clinic })
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'logo', maxCount: 1 },
      { name: 'background', maxCount: 1 },
    ]),
  )
  create(
    @Body() clinicDto: CreateClinicDto,
    @UploadedFiles()
    files: {
      logo?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
  ) {
    const { logo, background } = files;

    return this.clinicService.create({
      ...clinicDto,
      logo: logo ? logo[0] : null,
      background: background ? background[0] : null,
    });
  }

  @ApiOperation({ summary: 'Отримати всі клініки' })
  @ApiResponse({ status: 200, type: [Clinic] })
  @Get()
  getAll() {
    return this.clinicService.findAll();
  }

  @ApiOperation({ summary: 'Отримати клініку по id' })
  @ApiResponse({ status: 200, type: Clinic })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.clinicService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити всі клініки' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.clinicService.remove();
  }

  @ApiOperation({ summary: 'Отримати клініку по id' })
  @ApiResponse({ status: 200, type: Clinic })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.clinicService.removeById(params.id);
  }
}
