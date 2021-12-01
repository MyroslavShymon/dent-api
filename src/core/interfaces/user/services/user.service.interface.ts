import { BaseRepositoryInterface } from '../../../repositories';
import { User } from '../../../../database';

export interface UserServiceInterface extends BaseRepositoryInterface<User> {}
