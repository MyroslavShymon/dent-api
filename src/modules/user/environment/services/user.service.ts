import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../../../database';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../../../core/repositories';
import { UserServiceInterface } from '../../../../core/interfaces/user';
import { BASE_PROVIDER_REPOSITORY } from '../../../../core/repositories';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses/base-delete.response.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public async create(userDto: any): Promise<User> {
    return this.userRepository.create(userDto);
  }

  public async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  // public findByCondition(filterCondition: any): Promise<User> {
  //   return Promise.resolve(undefined);
  // }

  public async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOneById(id);
  }

  // public findWithRelations(relations: any): Promise<User[]> {
  //   return Promise.resolve([]);
  // }

  public removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.userRepository.removeById(id);
  }

  public remove(): Promise<BaseDeleteResponseInterface> {
    return this.userRepository.remove();
  }
}
