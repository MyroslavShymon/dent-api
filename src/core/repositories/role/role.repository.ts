import { BaseAbstractRepository } from '../base/base.abstract.repository';
import { Role } from '../../../database/role.entity';
import { RoleRepositoryInterface } from './role.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Inject } from '@nestjs/common';
import { BASE_PROVIDER_REPOSITORY } from '../base/base.provider.repository';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Role)
// , Repository<Role>
export class RoleRepository
  extends BaseAbstractRepository<Role>
  implements RoleRepositoryInterface
{
  constructor(
    @InjectRepository(Role)
    // @Inject(BASE_PROVIDER_REPOSITORY)
    public readonly rolesRepository: Repository<Role>,
  ) {
    super(rolesRepository);
  }
}
