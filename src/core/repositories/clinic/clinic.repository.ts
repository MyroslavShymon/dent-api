import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Clinic } from '../../../database';
import { ClinicRepositoryInterface } from './interfaces/clinic.repository.interface';
import { BaseRepositoryAbstract } from '../base';

@EntityRepository(Clinic)
// , Repository<Role>
export class ClinicRepository
  extends BaseRepositoryAbstract<Clinic>
  implements ClinicRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(Clinic)
    public readonly clinicsRepository: Repository<Clinic>,
  ) {
    super(clinicsRepository);
  }
}
