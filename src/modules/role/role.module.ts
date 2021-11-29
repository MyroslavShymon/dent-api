import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../../database/role.entity';
import { BASE_PROVIDER_REPOSITORY } from '../../core/repositories/base/base.provider.repository';
import { RoleRepository } from '../../core/repositories/role/role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [
    RoleService,
    { provide: BASE_PROVIDER_REPOSITORY, useClass: RoleRepository },
  ],
})
export class RoleModule {}
