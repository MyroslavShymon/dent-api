import { Inject, Injectable } from '@nestjs/common';
import {
  BASE_PROVIDER_REPOSITORY,
  CLINIC_SERVICE_TOKEN,
  ClinicServiceInterface,
  FilterConditionBaseType,
  PriceListRepository,
  PriceListServiceInterface,
  USER_SERVICE_TOKEN,
  UserServiceInterface,
  WORK_SERVICE_TOKEN,
  WorkServiceInterface,
} from '../../../../core';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceList } from '../../../../database';
import { FindManyOptions } from 'typeorm';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';
import { CreatePriceListDto } from '../dtos';

@Injectable()
export class PriceListService implements PriceListServiceInterface {
  constructor(
    @Inject(CLINIC_SERVICE_TOKEN)
    private readonly clinicService: ClinicServiceInterface,
    @Inject(WORK_SERVICE_TOKEN)
    private readonly workService: WorkServiceInterface,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(PriceListRepository)
    private readonly priceListRepository: PriceListRepository,
  ) {}

  async create({
    workId,
    clinicId,
    ...createPriceListDto
  }: CreatePriceListDto): Promise<PriceList> {
    const clinic = await this.clinicService.findOneById(clinicId);
    const work = await this.workService.findOneById(workId);
    return this.priceListRepository.create({
      clinic,
      work,
      ...createPriceListDto,
    });
  }

  public async findAll(): Promise<PriceList[]> {
    return this.priceListRepository.findAll();
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<PriceList>,
    isThrowing = true,
  ): Promise<PriceList> {
    return this.priceListRepository.findByCondition(
      filterCondition,
      isThrowing,
    );
  }

  public async findOneById(id: number): Promise<PriceList> {
    return this.priceListRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<PriceList>,
  ): Promise<PriceList[]> {
    return this.priceListRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.priceListRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.priceListRepository.removeById(id);
  }
}
