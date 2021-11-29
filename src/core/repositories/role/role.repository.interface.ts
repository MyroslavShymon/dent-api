import { BaseInterfaceRepository } from '../base/base.interface.repository';
import { Role } from '../../../database/role.entity';
import { Repository } from 'typeorm';

export interface RoleRepositoryInterface
  extends BaseInterfaceRepository<Role>,
    Repository<Role> {}
