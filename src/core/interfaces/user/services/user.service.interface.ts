import { BaseRepositoryInterface } from '../../../repositories';
import { User } from '../../../../database';
import { CreateUserDto } from '../../../../modules/user/environment';

export interface UserServiceInterface
  extends BaseRepositoryInterface<User, CreateUserDto> {}
