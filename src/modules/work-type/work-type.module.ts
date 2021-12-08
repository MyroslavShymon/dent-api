import { Module } from '@nestjs/common';
import { WORK_TYPE_CONTROLLERS } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseRepositoryProvider, WorkTypeRepository } from '../../core';
import { WorkTypeServiceProvider } from './environment';
import { WorkType } from '../../database';

@Module({
  controllers: WORK_TYPE_CONTROLLERS,
  imports: [TypeOrmModule.forFeature([WorkType])],
  providers: [
    WorkTypeServiceProvider,
    BaseRepositoryProvider(WorkTypeRepository),
  ],
  exports: [WorkTypeServiceProvider],
})
export class WorkTypeModule {}
