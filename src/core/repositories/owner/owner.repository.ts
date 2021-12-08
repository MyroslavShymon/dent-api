import { EntityRepository, Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../base';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from '../../../database';
import { OwnerRepositoryInterface } from './interfaces';

@EntityRepository(Owner)
// , Repository<Owner>
export class OwnerRepository
  extends BaseRepositoryAbstract<Owner>
  implements OwnerRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(Owner)
    public readonly ownersRepository: Repository<Owner>,
  ) {
    super(ownersRepository);
  }
}
