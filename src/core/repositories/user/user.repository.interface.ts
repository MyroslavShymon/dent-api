import { BaseInterfaceRepository } from '../base/base.interface.repository';
import { User } from '../../../database/user.entity';

export interface UserRepositoryInterface
  extends BaseInterfaceRepository<User> {}
