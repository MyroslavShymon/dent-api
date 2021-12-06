import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import {
  BASE_PROVIDER_REPOSITORY,
  ClinicRepository,
  ClinicServiceInterface,
  FilterConditionBaseType,
} from '../../../../core';
import { Clinic } from '../../../../database';
import { CreateClinicDto } from '../dtos';
import {
  FILE_SERVICE_TOKEN,
  FileServiceInterface,
  FileType,
} from '../../../../../libs/src/modules/file/environment';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';
import { FindManyOptions } from 'typeorm';

@Injectable()
export class ClinicService implements ClinicServiceInterface {
  constructor(
    @Inject(FILE_SERVICE_TOKEN)
    private readonly fileService: FileServiceInterface,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(ClinicRepository)
    private readonly clinicRepository: ClinicRepository,
  ) {}

  async create({
    logo,
    background,
    ...clinicDto
  }: CreateClinicDto): Promise<Clinic> {
    const logoPath = this.fileService.createFile(FileType.IMAGE, logo);
    const backgroundPath = this.fileService.createFile(
      FileType.IMAGE,
      background,
    );

    const clinic = await this.findByCondition(
      { title: clinicDto.title },
      false,
    );
    if (clinic)
      throw new HttpException('Clinic is already exist', HttpStatus.OK);

    return this.clinicRepository.create({
      ...clinicDto,
      logo: logoPath,
      background: backgroundPath,
    });
  }

  public async findAll(): Promise<Clinic[]> {
    return this.clinicRepository.findAll();
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<Clinic>,
    isThrowing = true,
  ): Promise<Clinic> {
    return this.clinicRepository.findByCondition(filterCondition, isThrowing);
  }

  public async findOneById(id: number): Promise<Clinic> {
    return this.clinicRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<Clinic>,
  ): Promise<Clinic[]> {
    return this.clinicRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.clinicRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.clinicRepository.removeById(id);
  }
}
