import { BaseRepositoryInterface } from '../../../repositories';
import { Role } from '../../../../database';
import { CreateRoleDto } from '../../../../modules/role/environment';

export interface RoleServiceInterface
  extends BaseRepositoryInterface<Role, CreateRoleDto> {}
