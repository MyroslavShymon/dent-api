import { USER_SERVICE_TOKEN } from '../../../../core/constants/tokens/user/user.service.token';
import { UserService } from '../services';
import { ClassProvider } from '@nestjs/common';

export const UserServiceProvider: ClassProvider = {
  provide: USER_SERVICE_TOKEN,
  useClass: UserService,
};
