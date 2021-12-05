import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from '../dtos';
import { User } from '../../../../database';
import * as bcrypt from 'bcryptjs';
import { TOKEN_SERVICE_TOKEN } from '../../../../../libs/src/modules/token/environment/tokens';
import { TokenServiceInterface } from '../../../../../libs/src/modules/token/environment/interfaces';
import {
  AuthServiceInterface,
  USER_SERVICE_TOKEN,
  UserServiceInterface,
} from '../../../../core';
import { CreateUserDto } from '../../../user/environment';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    @Inject(TOKEN_SERVICE_TOKEN)
    private readonly tokenService: TokenServiceInterface,
    @Inject(USER_SERVICE_TOKEN)
    private readonly userService: UserServiceInterface,
  ) {}
  async login(dto: LoginUserDto): Promise<string> {
    const user: User = await this.validateUser(dto);
    return this.tokenService.generateToken(user);
  }

  private async validateUser(dto: LoginUserDto): Promise<User> {
    const user: User = await this.userService.findUserByEmail(dto.email, false);

    if (!user) {
      throw new UnauthorizedException({
        message: 'Немає користувача з вказаною електронною адресою',
      });
    }
    console.log(dto.password, user.password);
    const passwordEquals: boolean = await bcrypt.compare(
      dto.password,
      user.password,
    );
    console.log('passwordEquals', passwordEquals);
    if (!passwordEquals) {
      throw new UnauthorizedException({
        message: 'Не коректний пароль',
      });
    }
    return user;
  }

  async registration({
    avatar,
    background,
    password,
    ...userDto
  }: CreateUserDto): Promise<string> {
    const candidate: User = await this.userService.findUserByEmail(
      userDto.email,
      false,
    );
    if (candidate) {
      throw new UnauthorizedException({
        message: 'Вже існує користувач з вказаною електронною адресою',
      });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user: User = await this.userService.create({
      avatar,
      background,
      password: hashPassword,
      ...userDto,
    });

    return this.tokenService.generateToken(user);
  }
}
