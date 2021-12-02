import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import {
  BaseParamRequestInterface,
  USER_SERVICE_TOKEN,
  UserServiceInterface,
  BASE_PROVIDER_REPOSITORY,
} from '../../core';
import { CreateUserDto, UserService } from './environment';

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_TOKEN)
    private userService: UserServiceInterface,
  ) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
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
