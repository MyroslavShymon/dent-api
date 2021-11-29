import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../database/user.entity';
import { UserRepositoryInterface } from '../../core/repositories/user/user.repository.interface';
import { BASE_PROVIDER_REPOSITORY } from "../../core/repositories/base/base.provider.repository";
// import { UserRepository } from "../../core/repositories/user/user.repository";

@Injectable()
export class UserService {
  constructor(
    @Inject(BASE_PROVIDER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async create(userDto: any): Promise<any> {
    // const user = new User();
    // user.email = userDto.email;
    // user.name = userDto.name;
    // user.password = userDto.password;
    // return user
    return this.userRepository.create(userDto);
  }
  // public async
}
