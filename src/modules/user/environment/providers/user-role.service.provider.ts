import { USER_ROlE_SERVICE_TOKEN } from '../../../../core';
import { ClassProvider } from '@nestjs/common';
import { UserRoleService } from '../services/user-role.service';

export const UserRoleServiceProvider: ClassProvider = {
  provide: USER_ROlE_SERVICE_TOKEN,
  useClass: UserRoleService,
};
