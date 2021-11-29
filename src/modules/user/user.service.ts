import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../database/user.entity';
import { UserRepositoryInterface } from '../../core/repositories/user/user.repository.interface';
import { UserRepository } from "../../core/repositories/user/user.repository";

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async create(userDto: any): Promise<User> {
    const user = new User();
    user.email = userDto.email;
    user.name = userDto.name;
    user.password = userDto.password;
    // return user
    return this.userRepository.create(user);
  }
}
