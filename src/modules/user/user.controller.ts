import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './environment/services';
import { UserServiceInterface } from '../../core/interfaces/user';
import { BASE_PROVIDER_REPOSITORY } from '../../core/repositories';
import { USER_SERVICE_TOKEN } from '../../core/constants/tokens/user/user.service.token';
import { BaseParamRequestInterface } from '../../core/interfaces/base/requests/base-param.request.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_TOKEN)
    private userService: UserServiceInterface,
  ) {}

  @Post()
  create(@Body() userDto: any) {
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
