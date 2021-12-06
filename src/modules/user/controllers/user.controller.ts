import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  BaseParamRequestInterface,
  USER_SERVICE_TOKEN,
  UserServiceInterface,
} from '../../../core';
import { CreateUserDto } from '../environment';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../../database';
import { BaseDeleteResponse } from '../../../core/interfaces/base/responses';

@ApiTags('Користувачі')
@Controller('/user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_TOKEN)
    private userService: UserServiceInterface,
  ) {}

  @ApiOperation({ summary: 'Створити користувача' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'background', maxCount: 1 },
    ]),
  )
  create(
    @Body() userDto: CreateUserDto,
    @UploadedFiles()
    files: {
      avatar?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
  ) {
    const { avatar, background } = files;

    return this.userService.create({
      ...userDto,
      avatar: avatar ? avatar[0] : null,
      background: background ? background[0] : null,
    });
  }

  @ApiOperation({ summary: 'Отримати всіх користувачів' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Отримати користувача по електронному адресу' })
  @ApiResponse({ status: 200, type: User })
  @Get('/email')
  getByEmail(@Query('email') email: string) {
    return this.userService.findUserByEmail(email);
  }

  @ApiOperation({ summary: 'Отримати користувача по id' })
  @ApiResponse({ status: 200, type: User })
  @Get('/:id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.userService.findOneById(params.id);
  }

  @ApiOperation({ summary: 'Видалити всіх користувачів' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete()
  delete() {
    return this.userService.remove();
  }

  @ApiOperation({ summary: 'Видалити користувача по id' })
  @ApiResponse({ status: 200, type: BaseDeleteResponse })
  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.userService.removeById(params.id);
  }
}
