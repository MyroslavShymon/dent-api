import { Inject, Injectable } from '@nestjs/common';
import { Role } from '../../../../database';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from '../../../../core/repositories';
import { UserServiceInterface } from '../../../../core/interfaces/user';
import { UserService } from '../../../user/environment/services';
import { BASE_PROVIDER_REPOSITORY } from '../../../../core/repositories';
import { USER_SERVICE_TOKEN } from '../../../../core/constants/tokens/user/user.service.token';

@Injectable()
export class RoleService {
  constructor(
    // private readonly roleRepository: RoleRepository,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository, // @Inject(USER_SERVICE_TOKEN) // private readonly userService: UserServiceInterface,
  ) {}

  public async create(roleDto: any): Promise<Role> {
    return this.roleRepository.create(roleDto);
  }

  public async getAll(): Promise<Role[]> {
    // this.userService.
    return this.roleRepository.findAll();
  }
}
