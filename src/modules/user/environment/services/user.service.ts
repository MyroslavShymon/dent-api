import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../database';
import {
  UserRepository,
  UserServiceInterface,
  BASE_PROVIDER_REPOSITORY,
} from '../../../../core';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';
import { CreateUserDto } from '../dtos';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public async create(userDto: CreateUserDto): Promise<User> {
    return this.userRepository.create(userDto);
  }

  public async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  // public async findByCondition(): Promise<User> {
  //   return await this.userRepository.findByCondition({ name: '3' });
  // }

  public async findOneById(id: number): Promise<User> {
    return this.userRepository.findOneById(id);
  }

  // public async findWithRelations(relations): Promise<User[]> {
  //   return await this.userRepository.usersRepository.find({ where: {} });
  // }

  public remove(): Promise<BaseDeleteResponseInterface> {
    return this.userRepository.remove();
  }

  public removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.userRepository.removeById(id);
  }
}
