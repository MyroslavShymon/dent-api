import { ClassProvider } from '@nestjs/common';
import { WORK_SERVICE_TOKEN } from '../../../../core';
import { WorkService } from '../services/work.service';

export const WorkServiceProvider: ClassProvider = {
  provide: WORK_SERVICE_TOKEN,
  useClass: WorkService,
};
