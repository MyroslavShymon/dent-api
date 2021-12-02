import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../../database';
import { RoleController } from './role.controller';
import { BaseRepositoryProvider, RoleRepository } from '../../core';
import { RoleService, RoleServiceProvider } from './environment';
// import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]),
    // UserModule
  ],
  controllers: [RoleController],
  providers: [RoleServiceProvider, BaseRepositoryProvider(RoleRepository)],
  exports: [RoleServiceProvider],
})
export class RoleModule {}
