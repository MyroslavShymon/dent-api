import { EntityRepository, Repository } from 'typeorm';
import { ClinicPostComment } from '../../../database';
import { BaseRepositoryAbstract } from '../base';
import { InjectRepository } from '@nestjs/typeorm';
import { ClinicPostCommentRepositoryInterface } from './interfaces';

@EntityRepository(ClinicPostComment)
// , Repository<Role>
export class ClinicPostCommentRepository
  extends BaseRepositoryAbstract<ClinicPostComment>
  implements ClinicPostCommentRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(ClinicPostComment)
    public readonly clinicPostCommentsRepository: Repository<ClinicPostComment>,
  ) {
    super(clinicPostCommentsRepository);
  }
}
