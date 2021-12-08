import { Module } from '@nestjs/common';
import { WorkService } from './environment/services/work.service';
import { WORK_CONTROLLERS } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner, Work } from '../../database';
import { UserModule } from '../user/user.module';
import { ClinicModule } from '../clinic/clinic.module';
import { OWNER_CONTROLLERS } from '../owner/controllers';
import { OwnerServiceProvider } from '../owner/environment';
import {
  BaseRepositoryProvider,
  OwnerRepository,
  WorkRepository,
} from '../../core';
import { WorkTypeModule } from '../work-type/work-type.module';
import { WorkServiceProvider } from './environment/providers';

@Module({
  controllers: WORK_CONTROLLERS,
  imports: [TypeOrmModule.forFeature([Work]), WorkTypeModule],
  providers: [WorkServiceProvider, BaseRepositoryProvider(WorkRepository)],
  exports: [WorkServiceProvider],
})
export class WorkModule {}
