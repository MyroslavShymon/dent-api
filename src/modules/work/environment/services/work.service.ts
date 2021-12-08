import { Inject, Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  BASE_PROVIDER_REPOSITORY,
  CLINIC_SERVICE_TOKEN,
  ClinicServiceInterface,
  FilterConditionBaseType,
  WorkRepository,
  USER_SERVICE_TOKEN,
  UserServiceInterface,
  WORK_TYPE_SERVICE_TOKEN,
  WorkTypeServiceInterface,
  WorkServiceInterface,
} from '../../../../core';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkDto } from '../../../work/environment';
import { Work } from '../../../../database';
import { FindManyOptions } from 'typeorm';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';

@ApiTags('Роботи')
@Injectable()
export class WorkService implements WorkServiceInterface {
  constructor(
    @Inject(WORK_TYPE_SERVICE_TOKEN)
    private readonly workTypeService: WorkTypeServiceInterface,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(WorkRepository)
    private readonly workRepository: WorkRepository,
  ) {}

  async create({ typeId, ...createWorkDto }: CreateWorkDto): Promise<Work> {
    const work = await this.workTypeService.findOneById(typeId);

    return this.workRepository.create({
      work,
      ...createWorkDto,
    });
  }

  public async findAll(): Promise<Work[]> {
    return this.workRepository.findAll();
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<Work>,
    isThrowing = true,
  ): Promise<Work> {
    return this.workRepository.findByCondition(filterCondition, isThrowing);
  }

  public async findOneById(id: number): Promise<Work> {
    return this.workRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<Work>,
  ): Promise<Work[]> {
    return this.workRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.workRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.workRepository.removeById(id);
  }
}
