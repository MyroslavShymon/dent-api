import { EntityRepository, Repository } from 'typeorm';
import { Administrator } from '../../../database';
import { BaseRepositoryAbstract } from '../base';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministratorRepositoryInterface } from './interfaces';

@EntityRepository(Administrator)
// , Repository<Role>
export class AdministratorRepository
  extends BaseRepositoryAbstract<Administrator>
  implements AdministratorRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(Administrator)
    public readonly administratorsRepository: Repository<Administrator>,
  ) {
    super(administratorsRepository);
  }
}
