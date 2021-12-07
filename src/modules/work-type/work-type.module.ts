import { Module } from '@nestjs/common';
import { WorkTypeController } from './work-type.controller';
import { WorkTypeService } from './work-type.service';

@Module({
  controllers: [WorkTypeController],
  providers: [WorkTypeService]
})
export class WorkTypeModule {}
