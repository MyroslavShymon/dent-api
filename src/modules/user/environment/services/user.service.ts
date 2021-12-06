import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../database';
import {
  UserRepository,
  UserServiceInterface,
  BASE_PROVIDER_REPOSITORY,
  ROLE_SERVICE_TOKEN,
  RoleServiceInterface,
} from '../../../../core';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';
import {
  FILE_SERVICE_TOKEN,
  FileServiceInterface,
} from '../../../../../libs/src/modules/file/environment';
import { FileType } from '../../../../../libs/src/modules/file/environment';
import { CreateUserDto } from '../dtos';
import { FindManyOptions } from 'typeorm';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject(FILE_SERVICE_TOKEN)
    private readonly fileService: FileServiceInterface,
    @Inject(ROLE_SERVICE_TOKEN)
    private readonly roleService: RoleServiceInterface,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public async create({
    avatar,
    background,
    ...userDto
  }: CreateUserDto): Promise<User> {
    const avatarPath = this.fileService.createFile(FileType.IMAGE, avatar);
    const backgroundPath = this.fileService.createFile(
      FileType.IMAGE,
      background,
    );

    const defaultRole = await this.roleService.findByCondition({
      title: 'User',
    });

    if (!defaultRole)
      await this.roleService.create({
        title: 'User',
        description: 'Default role',
      });

    return this.userRepository.create({
      ...userDto,
      avatar: avatarPath,
      background: backgroundPath,
      roles: [defaultRole],
    });
  }

  public async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  public async findUserByEmail(email: string, throwable = true): Promise<User> {
    try {
      return await this.userRepository.findByCondition({ email });
    } catch (error) {
      if (error && throwable) throw error;
    }
  }

  public async findOneById(id: number): Promise<User> {
    return this.userRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<User>,
  ): Promise<User[]> {
    return this.userRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.userRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.userRepository.removeById(id);
  }
}
