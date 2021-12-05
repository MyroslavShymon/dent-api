import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../../../../database';
import {
  RoleRepository,
  BASE_PROVIDER_REPOSITORY,
  RoleServiceInterface,
  UserServiceInterface,
  USER_SERVICE_TOKEN,
  FilterConditionBaseType,
} from '../../../../core';
import { UserService } from '../../../user/environment';
import { CreateRoleDto } from '../dtos';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';

@Injectable()
export class RoleService implements RoleServiceInterface {
  constructor(
    // private readonly roleRepository: RoleRepository,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository, // @Inject(USER_SERVICE_TOKEN) // private readonly userService: UserServiceInterface,
  ) {}

  public async create(roleDto: CreateRoleDto): Promise<Role> {
    return this.roleRepository.create(roleDto);
  }

  public async findAll(): Promise<Role[]> {
    return this.roleRepository.findAll();
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<Role>,
  ): Promise<Role> {
    return this.roleRepository.findByCondition(filterCondition);
  }

  public async findOneById(id: number): Promise<Role> {
    return this.roleRepository.findOneById(id);
  }

  // public async findWithRelations(relations: FindManyOptions<Role>): Promise<Role[]> {
  //   return Promise.resolve([]);
  // }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.roleRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.roleRepository.removeById(id);
  }
}
