import { ClassProvider } from '@nestjs/common';
import { RoleService } from '../services';
import { ROLE_SERVICE_TOKEN } from '../../../../core';

export const RoleServiceProvider: ClassProvider = {
  provide: ROLE_SERVICE_TOKEN,
  useClass: RoleService,
};
