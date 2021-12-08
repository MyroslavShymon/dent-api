import { EntityRepository, Repository } from 'typeorm';
import { WorkType } from '../../../database';
import { BaseRepositoryAbstract } from '../base';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkTypeRepositoryInterface } from './interfaces';

@EntityRepository(WorkType)
export class WorkTypeRepository
  extends BaseRepositoryAbstract<WorkType>
  implements WorkTypeRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(WorkType)
    public readonly workTypesRepository: Repository<WorkType>,
  ) {
    super(workTypesRepository);
  }
}
