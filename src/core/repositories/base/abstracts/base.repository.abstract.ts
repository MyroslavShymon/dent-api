import { BaseRepositoryInterface } from '../interfaces';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import {
  BaseDeleteResponse,
  BaseDeleteResponseInterface,
} from '../../../interfaces/base/responses/base-delete.response.interface';

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

  public async findByCondition(filterCondition: any): Promise<T> {
    return await this.entity.findOne({ where: filterCondition });
  }

  public async findWithRelations(relations: any): Promise<T[]> {
    return await this.entity.find(relations);
  }

  public async findAll(): Promise<T[]> {
    return await this.entity.find();
  }

  public async removeById(id: number): Promise<any> {
    const deleteResult = await this.entity.delete(id);
    return new BaseDeleteResponse(deleteResult);
  }

  public async remove(): Promise<any> {
    return await this.entity.createQueryBuilder().delete().execute();
  }
}
