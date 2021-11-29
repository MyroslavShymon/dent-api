import { Inject, Injectable } from '@nestjs/common';
import { BaseAbstractRepository } from '../base/base.abstract.repository';
import { User } from '../../../database/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from './user.repository.interface';
import { BASE_PROVIDER_REPOSITORY } from '../base/base.provider.repository';

@Injectable()
export class UserRepository
  extends BaseAbstractRepository<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(User)
    @Inject(BASE_PROVIDER_REPOSITORY)
    public readonly usersRepository: Repository<User>,
  ) {
    super(usersRepository);
  }
}
