import { Inject, Injectable } from '@nestjs/common';
import {
  BASE_PROVIDER_REPOSITORY,
  FilterConditionBaseType,
  WorkTypeRepository,
  WorkTypeServiceInterface,
} from '../../../../core';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkType } from '../../../../database';
import { FindManyOptions } from 'typeorm';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';
import { CreateWorkTypeDto } from '../dtos';

@ApiTags('Тип роботи')
@Injectable()
export class WorkTypeService implements WorkTypeServiceInterface {
  constructor(
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(WorkTypeRepository)
    private readonly workTypeRepository: WorkTypeRepository,
  ) {}

  async create(createWorkTypeDto: CreateWorkTypeDto): Promise<WorkType> {
    return this.workTypeRepository.create(createWorkTypeDto);
  }

  public async findAll(): Promise<WorkType[]> {
    return this.workTypeRepository.findAll();
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<WorkType>,
    isThrowing = true,
  ): Promise<WorkType> {
    return this.workTypeRepository.findByCondition(filterCondition, isThrowing);
  }

  public async findOneById(id: number): Promise<WorkType> {
    return this.workTypeRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<WorkType>,
  ): Promise<WorkType[]> {
    return this.workTypeRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.workTypeRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.workTypeRepository.removeById(id);
  }
}
