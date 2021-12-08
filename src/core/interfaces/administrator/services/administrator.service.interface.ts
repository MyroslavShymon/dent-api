import { BaseRepositoryInterface } from '../../../repositories';
import { Administrator } from '../../../../database';
import { CreateAdministratorDto } from '../../../../modules/administrator/environment';

export interface AdministratorServiceInterface
  extends BaseRepositoryInterface<Administrator, CreateAdministratorDto> {}
