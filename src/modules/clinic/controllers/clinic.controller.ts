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

@Controller('clinic')
export class ClinicController {
  constructor(
    @Inject(CLINIC_SERVICE_TOKEN)
    private clinicService: ClinicServiceInterface,
  ) {}

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

  @Get()
  getAll() {
    return this.clinicService.findAll();
  }

  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.clinicService.findOneById(params.id);
  }

  @Delete()
  delete() {
    return this.clinicService.remove();
  }

  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.clinicService.removeById(params.id);
  }
}
