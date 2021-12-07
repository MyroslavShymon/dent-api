import { Module } from '@nestjs/common';
import { ClinicPostCommentController } from './clinic-post-comment.controller';
import { ClinicPostCommentService } from './clinic-post-comment.service';

@Module({
  controllers: [ClinicPostCommentController],
  providers: [ClinicPostCommentService]
})
export class ClinicPostCommentModule {}
