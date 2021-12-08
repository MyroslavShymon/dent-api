import { Inject, Injectable } from '@nestjs/common';
import {
  BASE_PROVIDER_REPOSITORY,
  CLINIC_SERVICE_TOKEN,
  ClinicPostRepository,
  ClinicServiceInterface,
  FilterConditionBaseType,
} from '../../../../core';
import { ClinicPost } from '../../../../database';
import { CreateClinicPostDto } from '../dtos';
import {
  FILE_SERVICE_TOKEN,
  FileServiceInterface,
  FileType,
} from '../../../../../libs/src/modules/file/environment';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';
import { FindManyOptions } from 'typeorm';
import { ClinicPostServiceInterface } from '../../../../core';

@Injectable()
export class ClinicPostService implements ClinicPostServiceInterface {
  constructor(
    @Inject(FILE_SERVICE_TOKEN)
    private readonly fileService: FileServiceInterface,
    @Inject(CLINIC_SERVICE_TOKEN)
    private readonly clinicService: ClinicServiceInterface,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(ClinicPostRepository)
    private readonly clinicPostRepository: ClinicPostRepository,
  ) {}

  async create({
    photo,
    clinicId,
    ...clinicPostDto
  }: CreateClinicPostDto): Promise<ClinicPost> {
    const photoPath = this.fileService.createFile(FileType.IMAGE, photo);
    const clinic = await this.clinicService.findOneById(clinicId);

    return this.clinicPostRepository.create({
      ...clinicPostDto,
      clinic,
      photo: photoPath,
    });
  }

  public async findAll(): Promise<ClinicPost[]> {
    return this.clinicPostRepository.findAll();
  }

  public async findPostsByClinicId(id: number): Promise<ClinicPost[]> {
    const clinic = await this.clinicService.findOneById(id);
    return this.clinicPostRepository.findWithRelations({
      where: { clinic },
    });
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<ClinicPost>,
    isThrowing = true,
  ): Promise<ClinicPost> {
    return this.clinicPostRepository.findByCondition(
      filterCondition,
      isThrowing,
    );
  }

  public async findOneById(id: number): Promise<ClinicPost> {
    return this.clinicPostRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<ClinicPost>,
  ): Promise<ClinicPost[]> {
    return this.clinicPostRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.clinicPostRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.clinicPostRepository.removeById(id);
  }
}
