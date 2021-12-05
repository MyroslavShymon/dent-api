import { BaseRepositoryInterface } from '../interfaces';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import {
  BaseDeleteResponse,
  BaseDeleteResponseInterface,
} from '../../../interfaces/base/responses';
import { FilterConditionBaseType } from '../../../types';

export class BaseRepositoryAbstract<T> implements BaseRepositoryInterface<T> {
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async create(data: T | any): Promise<T> {
    return await this.entity.save(data);
  }

  public async findOneById(id: number): Promise<T> {
    const essence: T = await this.entity.findOne(id);
    if (!essence)
      throw new NotFoundException(
        `Not found ${this.entity.metadata.tableName} with id ${id}`,
      );
    return essence;
  }

  //TODO fix typing
  public async findByCondition(
    filterCondition: FilterConditionBaseType<T>,
  ): Promise<T> {
    const essence: T = await this.entity.findOne({ where: filterCondition });
    if (!essence)
      throw new NotFoundException(
        `Not found ${this.entity.metadata.tableName}`,
      );
    return essence;
  }

  public async findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
    return await this.entity.find(relations);
  }

  public async findAll(): Promise<T[]> {
    return await this.entity.find();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    const deleteResult = await this.entity.delete(id);
    return new BaseDeleteResponse(deleteResult);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    const deleteResult = await this.entity
      .createQueryBuilder()
      .delete()
      .execute();
    return new BaseDeleteResponse(deleteResult, 'All rows delete success');
  }
}
