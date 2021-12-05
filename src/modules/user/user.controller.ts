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
  USER_SERVICE_TOKEN,
  UserServiceInterface,
  BASE_PROVIDER_REPOSITORY,
} from '../../core';
import { CreateUserDto, UserService } from './environment';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_TOKEN)
    private userService: UserServiceInterface,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() userDto: CreateUserDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.userService.create({ ...userDto, image });
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
