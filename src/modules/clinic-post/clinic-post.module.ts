import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicPost } from '../../database';
import { CLINIC_POST_CONTROLLERS } from './controllers';
import { ClinicPostServiceProvider } from './environment';
import { BaseRepositoryProvider, ClinicPostRepository } from '../../core';
import { ClinicModule } from '../clinic/clinic.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClinicPost]), ClinicModule],
  controllers: CLINIC_POST_CONTROLLERS,
  providers: [
    ClinicPostServiceProvider,
    BaseRepositoryProvider(ClinicPostRepository),
  ],
  exports: [ClinicPostServiceProvider],
})
export class ClinicPostModule {}
