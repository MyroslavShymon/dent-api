import { BaseRepositoryInterface } from '../../../repositories';
import { ClinicPostComment } from '../../../../database';
import { CreateClinicPostCommentDto } from '../../../../modules/clinic-post-comment/environment/dtos';

export interface ClinicPostCommentServiceInterface
  extends BaseRepositoryInterface<
    ClinicPostComment,
    CreateClinicPostCommentDto
  > {}
