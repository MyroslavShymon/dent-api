import { BaseRepositoryInterface } from '../../../repositories';
import { Clinic } from '../../../../database';
import { CreateClinicDto } from '../../../../modules/clinic/environment';

export interface ClinicServiceInterface
  extends BaseRepositoryInterface<Clinic, CreateClinicDto> {}
