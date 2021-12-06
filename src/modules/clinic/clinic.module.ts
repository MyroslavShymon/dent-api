import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinic } from '../../database';
import { ClinicServiceProvider } from './environment';
import { BaseRepositoryProvider, ClinicRepository } from '../../core';
import { CLINIC_CONTROLLERS } from './controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Clinic])],
  controllers: CLINIC_CONTROLLERS,
  providers: [ClinicServiceProvider, BaseRepositoryProvider(ClinicRepository)],
  exports: [ClinicServiceProvider],
})
export class ClinicModule {}
