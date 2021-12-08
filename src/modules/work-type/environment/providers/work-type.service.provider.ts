import { ClassProvider } from '@nestjs/common';
import { WORK_TYPE_SERVICE_TOKEN } from '../../../../core';
import { WorkTypeService } from '../services/work-type.service';

export const WorkTypeServiceProvider: ClassProvider = {
  provide: WORK_TYPE_SERVICE_TOKEN,
  useClass: WorkTypeService,
};
