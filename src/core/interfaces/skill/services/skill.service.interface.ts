import { BaseRepositoryInterface } from '../../../repositories';
import { Skill } from '../../../../database';
import { CreateSkillDto } from '../../../../modules/skill/environment/dtos';

export interface SkillServiceInterface
  extends BaseRepositoryInterface<Skill, CreateSkillDto> {}
