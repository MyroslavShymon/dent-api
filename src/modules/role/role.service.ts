import { Inject, Injectable } from '@nestjs/common';
import { Role } from '../../database/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from '../../core/repositories/role/role.repository';
import { BASE_PROVIDER_REPOSITORY } from '../../core/providers/base/base.repository.provider';

@Injectable()
export class RoleService {
  constructor(
    // private readonly roleRepository: RoleRepository,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository,
  ) {}

  public async create(roleDto: any): Promise<Role> {
    return this.roleRepository.create(roleDto);
  }

  public async getAll(): Promise<Role[]> {
    return this.roleRepository.findAll();
  }
}
