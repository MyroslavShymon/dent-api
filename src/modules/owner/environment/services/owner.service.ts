import { Inject, Injectable } from '@nestjs/common';
import {
  BASE_PROVIDER_REPOSITORY,
  CLINIC_SERVICE_TOKEN,
  ClinicServiceInterface,
  FilterConditionBaseType,
  OwnerRepository,
  USER_SERVICE_TOKEN,
  UserServiceInterface,
} from '../../../../core';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from '../../../../database';
import { FindManyOptions } from 'typeorm';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';
import { CreateOwnerDto } from '../dtos';

@Injectable()
export class OwnerService {
  constructor(
    @Inject(CLINIC_SERVICE_TOKEN)
    private readonly clinicService: ClinicServiceInterface,
    @Inject(USER_SERVICE_TOKEN)
    private readonly userService: UserServiceInterface,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(OwnerRepository)
    private readonly ownerRepository: OwnerRepository,
  ) {}

  async create({ userId, clinicId }: CreateOwnerDto): Promise<Owner> {
    const clinic = await this.clinicService.findOneById(clinicId);
    const user = await this.userService.findOneById(userId);
    return this.ownerRepository.create({
      clinic,
      user,
    });
  }

  public async findAll(): Promise<Owner[]> {
    return this.ownerRepository.findAll();
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<Owner>,
    isThrowing = true,
  ): Promise<Owner> {
    return this.ownerRepository.findByCondition(filterCondition, isThrowing);
  }

  public async findOneById(id: number): Promise<Owner> {
    return this.ownerRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<Owner>,
  ): Promise<Owner[]> {
    return this.ownerRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.ownerRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.ownerRepository.removeById(id);
  }
}
