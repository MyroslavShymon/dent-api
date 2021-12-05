import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  BaseParamRequestInterface,
  USER_SERVICE_TOKEN,
  UserServiceInterface,
  BASE_PROVIDER_REPOSITORY,
} from '../../core';
import { CreateUserDto, UserService } from './environment';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_TOKEN)
    private userService: UserServiceInterface,
  ) {}

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

  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  getById(@Param() params: BaseParamRequestInterface) {
    return this.userService.findOneById(params.id);
  }

  @Delete()
  delete() {
    return this.userService.remove();
  }

  @Delete(':id')
  deleteById(@Param() params: BaseParamRequestInterface) {
    return this.userService.removeById(params.id);
  }
}
