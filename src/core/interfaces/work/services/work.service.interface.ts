import { BaseRepositoryInterface } from '../../../repositories';
import { Work } from '../../../../database';
import { CreateWorkDto } from '../../../../modules/work/environment/dtos';

export interface WorkServiceInterface
  extends BaseRepositoryInterface<Work, CreateWorkDto> {}
