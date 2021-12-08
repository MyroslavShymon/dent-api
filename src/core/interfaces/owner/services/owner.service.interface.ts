import { BaseRepositoryInterface } from '../../../repositories';
import { Owner } from '../../../../database';
import { CreateOwnerDto } from '../../../../modules/owner/environment/dtos';

export interface OwnerServiceInterface
  extends BaseRepositoryInterface<Owner, CreateOwnerDto> {}
