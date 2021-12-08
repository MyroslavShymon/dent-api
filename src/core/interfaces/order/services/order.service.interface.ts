import { BaseRepositoryInterface } from '../../../repositories';
import { Order } from '../../../../database';
import { CreateOrderDto } from '../../../../modules/order/environment/dtos';

export interface OrderServiceInterface
  extends BaseRepositoryInterface<Order, CreateOrderDto> {}
