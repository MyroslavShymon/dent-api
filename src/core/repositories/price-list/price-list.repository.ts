import { EntityRepository, Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../base';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceList } from '../../../database';
import { PriceListRepositoryInterface } from './interfaces';

@EntityRepository(PriceList)
// , Repository<PriceList>
export class PriceListRepository
  extends BaseRepositoryAbstract<PriceList>
  implements PriceListRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(PriceList)
    public readonly priceListsRepository: Repository<PriceList>,
  ) {
    super(priceListsRepository);
  }
}
