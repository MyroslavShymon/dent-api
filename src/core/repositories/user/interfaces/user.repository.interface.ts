import { BaseRepositoryInterface } from '../../base';
import { User } from '../../../../database';

export interface UserRepositoryInterface
  extends BaseRepositoryInterface<User> {}
