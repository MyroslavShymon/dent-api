import { ClassProvider } from '@nestjs/common';
import { OWNER_SERVICE_TOKEN } from '../../../../core';
import { OwnerService } from '../services/owner.service';

export const OwnerServiceProvider: ClassProvider = {
  provide: OWNER_SERVICE_TOKEN,
  useClass: OwnerService,
};
