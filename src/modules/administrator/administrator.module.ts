import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from '../../database';
import { UserModule } from '../user/user.module';
import { ClinicModule } from '../clinic/clinic.module';
import { BaseRepositoryProvider, AdministratorRepository } from '../../core';
import { AdministratorServiceProvider } from './environment';
import { ADMINISTRATOR_CONTROLLERS } from './controllers';

@Module({
  imports: [
    TypeOrmModule.forFeature([Administrator]),
    UserModule,
    ClinicModule,
  ],
  controllers: ADMINISTRATOR_CONTROLLERS,
  providers: [
    AdministratorServiceProvider,
    BaseRepositoryProvider(AdministratorRepository),
  ],
  exports: [AdministratorServiceProvider],
})
export class AdministratorModule {}
