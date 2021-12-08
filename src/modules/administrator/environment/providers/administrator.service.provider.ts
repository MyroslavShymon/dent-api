import { ClassProvider } from '@nestjs/common';
import { ADMINISTRATOR_SERVICE_TOKEN } from '../../../../core';
import { AdministratorService } from '../services';

export const AdministratorServiceProvider: ClassProvider = {
  provide: ADMINISTRATOR_SERVICE_TOKEN,
  useClass: AdministratorService,
};
