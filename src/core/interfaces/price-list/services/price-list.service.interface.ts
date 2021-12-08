import { BaseRepositoryInterface } from '../../../repositories';
import { PriceList } from '../../../../database';
import { CreatePriceListDto } from '../../../../modules/price-list/environment/dtos';

export interface PriceListServiceInterface
  extends BaseRepositoryInterface<PriceList, CreatePriceListDto> {}
