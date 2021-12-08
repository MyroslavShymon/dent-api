import { Module } from '@nestjs/common';
import { OWNER_CONTROLLERS } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from '../../database';
import { OwnerServiceProvider } from './environment';
import { BaseRepositoryProvider, OwnerRepository } from '../../core';
import { UserModule } from '../user/user.module';
import { ClinicModule } from '../clinic/clinic.module';

@Module({
  imports: [TypeOrmModule.forFeature([Owner]), UserModule, ClinicModule],
  controllers: OWNER_CONTROLLERS,
  providers: [OwnerServiceProvider, BaseRepositoryProvider(OwnerRepository)],
  exports: [OwnerServiceProvider],
})
export class OwnerModule {}
