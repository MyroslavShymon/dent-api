import { EntityRepository, Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../base';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepositoryInterface } from './interfaces';
import { Order } from '../../../database';

@EntityRepository(Order)
// , Repository<Order>
export class OrderRepository
  extends BaseRepositoryAbstract<Order>
  implements OrderRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(Order)
    public readonly ordersRepository: Repository<Order>,
  ) {
    super(ordersRepository);
  }
}
