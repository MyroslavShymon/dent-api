import { ClassProvider } from '@nestjs/common';
import { ORDER_SERVICE_TOKEN } from '../../../../core';
import { OrderService } from '../services/order.service';

export const OrderServiceProvider: ClassProvider = {
  provide: ORDER_SERVICE_TOKEN,
  useClass: OrderService,
};
