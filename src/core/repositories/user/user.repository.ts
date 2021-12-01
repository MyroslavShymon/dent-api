import { BaseRepositoryAbstract } from '../base';
import { User } from '../../../database';
import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from './interfaces';

@EntityRepository(User)
export class UserRepository
  extends BaseRepositoryAbstract<User>
  implements UserRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(User)
    public readonly usersRepository: Repository<User>,
  ) {
    super(usersRepository);
  }
}
