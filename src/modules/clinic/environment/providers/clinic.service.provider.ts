import { ClassProvider } from '@nestjs/common';
import { ClinicService } from '../services';
import { CLINIC_SERVICE_TOKEN } from '../../../../core';

export const ClinicServiceProvider: ClassProvider = {
  provide: CLINIC_SERVICE_TOKEN,
  useClass: ClinicService,
};
