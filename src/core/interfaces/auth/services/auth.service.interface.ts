import { CreateUserDto } from '../../../../modules/user/environment';
import { LoginUserDto } from '../../../../modules/auth/environment';

export interface AuthServiceInterface {
  login(dto: LoginUserDto): Promise<string>;
  // validateUser(dto: LoginUserDto): Promise<User>;
  registration(dto: CreateUserDto): Promise<string>;
}
