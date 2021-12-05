import {
  Body,
  Controller,
  Inject,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from '../user/environment';
import { LoginUserDto } from './environment';
import { AUTH_SERVICE_TOKEN, AuthServiceInterface } from '../../core';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN)
    private authService: AuthServiceInterface,
  ) {}

  @Post('/login')
  login(@Body() userDto: LoginUserDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'background', maxCount: 1 },
    ]),
  )
  registration(
    @Body() userDto: CreateUserDto,
    @UploadedFiles()
    files: {
      avatar?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
  ) {
    const { avatar, background } = files;
    return this.authService.registration({
      ...userDto,
      avatar: avatar ? avatar[0] : null,
      background: background ? background[0] : null,
    });
  }
}
