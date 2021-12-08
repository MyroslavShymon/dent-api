import { EntityRepository, Repository } from 'typeorm';
import { Skill } from '../../../database';
import { BaseRepositoryAbstract } from '../base';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillRepositoryInterface } from './interfaces';

@EntityRepository(Skill)
// , Repository<Skill>
export class SkillRepository
  extends BaseRepositoryAbstract<Skill>
  implements SkillRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(Skill)
    public readonly skillsRepository: Repository<Skill>,
  ) {
    super(skillsRepository);
  }
}
