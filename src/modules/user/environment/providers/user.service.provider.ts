import { USER_SERVICE_TOKEN } from '../../../../core';
import { UserService } from '../services';
import { ClassProvider } from '@nestjs/common';

export const UserServiceProvider: ClassProvider = {
  provide: USER_SERVICE_TOKEN,
  useClass: UserService,
};
