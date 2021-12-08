import { ClassProvider } from '@nestjs/common';
import { PRICE_LIST_SERVICE_TOKEN } from '../../../../core';
import { PriceListService } from '../services/price-list.service';

export const PriceListServiceProvider: ClassProvider = {
  provide: PRICE_LIST_SERVICE_TOKEN,
  useClass: PriceListService,
};
