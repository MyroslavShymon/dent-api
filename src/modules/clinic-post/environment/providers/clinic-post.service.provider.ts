import { ClassProvider } from '@nestjs/common';
import { CLINIC_POST_SERVICE_TOKEN } from '../../../../core';
import { ClinicPostService } from '../services';

export const ClinicPostServiceProvider: ClassProvider = {
  provide: CLINIC_POST_SERVICE_TOKEN,
  useClass: ClinicPostService,
};
