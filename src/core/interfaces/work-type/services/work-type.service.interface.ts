import { BaseRepositoryInterface } from '../../../repositories';
import { WorkType } from '../../../../database';
import { CreateWorkTypeDto } from '../../../../modules/work-type/environment/dtos';

export interface WorkTypeServiceInterface
  extends BaseRepositoryInterface<WorkType, CreateWorkTypeDto> {}
