import { BaseAbstractRepository } from '../base/base.abstract.repository';
import { User } from '../../../database/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from './user.repository.interface';

@EntityRepository(User)
export class UserRepository
  extends BaseAbstractRepository<User>
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
