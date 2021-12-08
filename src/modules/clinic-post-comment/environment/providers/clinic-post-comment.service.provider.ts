import { ClassProvider } from '@nestjs/common';
import { CLINIC_POST_COMMENT_SERVICE_TOKEN } from '../../../../core';
import { ClinicPostCommentService } from '../services/clinic-post-comment.service';

export const ClinicPostCommentServiceProvider: ClassProvider = {
  provide: CLINIC_POST_COMMENT_SERVICE_TOKEN,
  useClass: ClinicPostCommentService,
};
