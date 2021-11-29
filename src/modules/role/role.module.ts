import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../../database/role.entity';
import { RoleRepository } from '../../core/repositories/role/role.repository';
import { BaseRepositoryProvider } from '../../core/providers/base/base.repository.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleService, BaseRepositoryProvider(RoleRepository)],
})
export class RoleModule {}
