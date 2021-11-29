import { BaseAbstractRepository } from '../base/base.abstract.repository';
import { Role } from '../../../database/role.entity';
import { RoleRepositoryInterface } from './role.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Role)
// , Repository<Role>
export class RoleRepository
  extends BaseAbstractRepository<Role>
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
