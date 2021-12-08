import { BaseRepositoryInterface } from '../../../repositories';
import { ClinicPost } from '../../../../database';
import { CreateClinicPostDto } from '../../../../modules/clinic-post/environment';

export interface ClinicPostServiceInterface
  extends BaseRepositoryInterface<ClinicPost, CreateClinicPostDto> {
  findPostsByClinicId(id: number): Promise<ClinicPost[]>;
}
