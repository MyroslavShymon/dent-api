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
  CLINIC_POST_COMMENT_SERVICE_TOKEN,
  ClinicPostCommentServiceInterface,
} from '../../../core';
// import { ClinicPostComment } from '../../../database';
// import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';
import { CreateClinicPostCommentDto } from '../environment';

@ApiTags('Коментарі постів клініки')
@Controller('clinic-post-comment')
export class ClinicPostCommentController {
  constructor(
    @Inject(CLINIC_POST_COMMENT_SERVICE_TOKEN)
    private clinicPostCommentService: ClinicPostCommentServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити комент' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() clinicPostCommentDto: CreateClinicPostCommentDto) {
    return this.clinicPostCommentService.create(clinicPostCommentDto);
  }

  @ApiOperation({ summary: 'Отримати всі коменти всіх клінік' })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.clinicPostCommentService.findAll();
  }

  @ApiOperation({ summary: 'Отримати коменти по id' })
  @ApiResponse({ status: 200 })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.clinicPostCommentService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити коменти всіх фірм' })
  @ApiResponse({ status: 200 })
  @Delete()
  delete() {
    return this.clinicPostCommentService.remove();
  }

  @ApiOperation({ summary: 'Видалити коменти клініки по id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.clinicPostCommentService.removeById(params.id);
  }
}
