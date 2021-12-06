import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../../database';
import { BaseRepositoryProvider, RoleRepository } from '../../core';
import { RoleServiceProvider } from './environment';
import { ROLE_CONTROLLERS } from './controllers';
// import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]),
    // UserModule
  ],
  controllers: ROLE_CONTROLLERS,
  providers: [RoleServiceProvider, BaseRepositoryProvider(RoleRepository)],
  exports: [RoleServiceProvider],
})
export class RoleModule {}
