import {
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  BASE_PROVIDER_REPOSITORY,
  ROLE_SERVICE_TOKEN,
  RoleServiceInterface,
  UserRepository,
  UserRoleServiceInterface,
} from '../../../../core';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnectUserRoleDto } from '../dtos';

@Injectable()
export class UserRoleService implements UserRoleServiceInterface {
  constructor(
    @Inject(ROLE_SERVICE_TOKEN)
    private readonly roleService: RoleServiceInterface,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  async connectUserRole({ userId, roleId }: ConnectUserRoleDto): Promise<any> {
    const role = await this.roleService.findOneById(roleId);
    const userWithRoles = await this.getUserWithRoleByUserId(userId);
    if (!userWithRoles) {
      throw new NotFoundException(`Нема користувача з id ${userId}`);
    }
    const { roles, ...user } = userWithRoles;

    await this.userRepository.usersRepository.save({
      ...user,
      roles: [...roles, role],
    });
    return {
      status: HttpStatus.OK,
      message: `Ви додали роль з id ${roleId} користувачу з id ${userId}`,
    };
  }

  async getUserWithRoleByUserId(id: number) {
    return this.userRepository.usersRepository
      .createQueryBuilder('user')
      .where({ id })
      .leftJoinAndSelect('user.roles', 'roles')
      .getOne();
  }
}
