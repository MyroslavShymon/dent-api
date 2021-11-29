import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../database/user.entity';
import { BASE_PROVIDER_REPOSITORY } from '../../core/providers/base/base.repository.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../core/repositories/user/user.repository';

// import { UserRepository } from "../../core/repositories/user/user.repository";

@Injectable()
export class UserService {
  constructor(
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public async create(userDto: any): Promise<User> {
    return this.userRepository.create(userDto);
  }

  // public async
}
