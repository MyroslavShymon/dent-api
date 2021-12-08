import { EntityRepository, Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../base';
import { InjectRepository } from '@nestjs/typeorm';
import { ClinicPostRepositoryInterface } from './interfaces';
import { ClinicPost } from '../../../database';

@EntityRepository(ClinicPost)
// , Repository<Role>
export class ClinicPostRepository
  extends BaseRepositoryAbstract<ClinicPost>
  implements ClinicPostRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(ClinicPost)
    public readonly clinicPostsRepository: Repository<ClinicPost>,
  ) {
    super(clinicPostsRepository);
  }
}
