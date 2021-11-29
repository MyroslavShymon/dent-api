import { BaseInterfaceRepository } from '../base/base.interface.repository';
import { Role } from '../../../database/role.entity';

export interface RoleRepositoryInterface
  extends BaseInterfaceRepository<Role> {}
