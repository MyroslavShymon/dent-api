import { Inject, Injectable } from '@nestjs/common';
import {
  BASE_PROVIDER_REPOSITORY,
  CLINIC_SERVICE_TOKEN,
  ClinicServiceInterface,
  FilterConditionBaseType,
  AdministratorRepository,
  USER_SERVICE_TOKEN,
  UserServiceInterface,
} from '../../../../core';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from '../../../../database';
import { FindManyOptions } from 'typeorm';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';
import { CreateAdministratorDto } from '../dtos';

@Injectable()
export class AdministratorService {
  constructor(
    @Inject(CLINIC_SERVICE_TOKEN)
    private readonly clinicService: ClinicServiceInterface,
    @Inject(USER_SERVICE_TOKEN)
    private readonly userService: UserServiceInterface,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(AdministratorRepository)
    private readonly administratorRepository: AdministratorRepository,
  ) {}

  async create({
    userId,
    clinicId,
  }: CreateAdministratorDto): Promise<Administrator> {
    const clinic = await this.clinicService.findOneById(clinicId);
    const user = await this.userService.findOneById(userId);
    return this.administratorRepository.create({
      clinic,
      user,
    });
  }

  public async findAll(): Promise<Administrator[]> {
    return this.administratorRepository.findAll();
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<Administrator>,
    isThrowing = true,
  ): Promise<Administrator> {
    return this.administratorRepository.findByCondition(
      filterCondition,
      isThrowing,
    );
  }

  public async findOneById(id: number): Promise<Administrator> {
    return this.administratorRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<Administrator>,
  ): Promise<Administrator[]> {
    return this.administratorRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.administratorRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.administratorRepository.removeById(id);
  }
}
