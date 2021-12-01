import { BaseRepositoryAbstract } from '../base';
import { Role } from '../../../database';
import { RoleRepositoryInterface } from './interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Role)
// , Repository<Role>
export class RoleRepository
  extends BaseRepositoryAbstract<Role>
  implements RoleRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(Role)
    public readonly rolesRepository: Repository<Role>,
  ) {
    super(rolesRepository);
  }
}
