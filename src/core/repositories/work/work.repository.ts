import { EntityRepository, Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../base';
import { InjectRepository } from '@nestjs/typeorm';
import { Work } from '../../../database';
import { WorkRepositoryInterface } from './interfaces';

@EntityRepository(Work)
export class WorkRepository
  extends BaseRepositoryAbstract<Work>
  implements WorkRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(Work)
    public readonly worksRepository: Repository<Work>,
  ) {
    super(worksRepository);
  }
}
