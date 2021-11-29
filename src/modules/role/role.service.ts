import { Inject, Injectable } from '@nestjs/common';
import { BASE_PROVIDER_REPOSITORY } from '../../core/repositories/base/base.provider.repository';
import { RoleRepositoryInterface } from '../../core/repositories/role/role.repository.interface';
import { Role } from '../../database/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleRepository } from "../../core/repositories/role/role.repository";

@Injectable()
export class RoleService {
  constructor(
    // private readonly roleRepository: RoleRepository,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository,
  ) {}

  public async create(roleDto: any): Promise<Role> {
    const user = await this.roleRepository.rolesRepository.findOne({ title: 'User' });
    console.log('user', user);

    return this.roleRepository.createSm(roleDto);
  }

  public async getAll(): Promise<Role[]>
  {
    return this.roleRepository.findAll();
  }
}
