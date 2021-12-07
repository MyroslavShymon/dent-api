import { Module } from '@nestjs/common';
import { ClinicPostController } from './clinic-post.controller';
import { ClinicPostService } from './clinic-post.service';

@Module({
  controllers: [ClinicPostController],
  providers: [ClinicPostService]
})
export class ClinicPostModule {}
