import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './environment/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../../database';
import { RoleRepository } from '../../core/repositories';
import { BaseRepositoryProvider } from '../../core/repositories';
// import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]),
    // UserModule
  ],
  controllers: [RoleController],
  providers: [RoleService, BaseRepositoryProvider(RoleRepository)],
})
export class RoleModule {}
