import { ClassProvider } from '@nestjs/common';
import { AUTH_SERVICE_TOKEN } from '../../../../core';
import { AuthService } from '../services';

export const AuthServiceProvider: ClassProvider = {
  provide: AUTH_SERVICE_TOKEN,
  useClass: AuthService,
};
