import { Inject, Injectable } from '@nestjs/common';
import {
  BASE_PROVIDER_REPOSITORY,
  CLINIC_POST_SERVICE_TOKEN,
  ClinicPostCommentRepository,
  ClinicPostCommentServiceInterface,
  ClinicPostServiceInterface,
  FilterConditionBaseType,
  USER_SERVICE_TOKEN,
  UserServiceInterface,
} from '../../../../core';
import { CreateClinicPostCommentDto } from '../dtos';
import { ClinicPostComment } from '../../../../database';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';

@Injectable()
export class ClinicPostCommentService
  implements ClinicPostCommentServiceInterface
{
  constructor(
    @Inject(USER_SERVICE_TOKEN)
    private readonly userService: UserServiceInterface,
    @Inject(CLINIC_POST_SERVICE_TOKEN)
    private readonly clinicPostService: ClinicPostServiceInterface,
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(ClinicPostCommentRepository)
    private readonly clinicPostCommentRepository: ClinicPostCommentRepository,
  ) {}

  public async create({
    postId,
    userId,
    ...clinicPostCommentDto
  }: CreateClinicPostCommentDto): Promise<ClinicPostComment> {
    const post = await this.clinicPostService.findOneById(postId);
    return this.clinicPostCommentRepository.create({
      post,
      userId,
      ...clinicPostCommentDto,
    });
  }

  public async findAll(): Promise<ClinicPostComment[]> {
    return this.clinicPostCommentRepository.findAll();
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<ClinicPostComment>,
    isThrowing = true,
  ): Promise<ClinicPostComment> {
    return this.clinicPostCommentRepository.findByCondition(
      filterCondition,
      isThrowing,
    );
  }

  public async findOneById(id: number): Promise<ClinicPostComment> {
    return this.clinicPostCommentRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<ClinicPostComment>,
  ): Promise<ClinicPostComment[]> {
    return this.clinicPostCommentRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.clinicPostCommentRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.clinicPostCommentRepository.removeById(id);
  }
}
