import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database';
import { UserRepository, BaseRepositoryProvider } from '../../core';
import { RoleModule } from '../role/role.module';
import { USER_CONTROLLERS } from './controllers';
import { UserRoleServiceProvider, UserServiceProvider } from './environment';

@Module({
  imports: [TypeOrmModule.forFeature([User]), RoleModule],
  controllers: USER_CONTROLLERS,
  providers: [
    UserServiceProvider,
    UserRoleServiceProvider,
    BaseRepositoryProvider(UserRepository),
  ],
  exports: [UserServiceProvider],
})
export class UserModule {}
