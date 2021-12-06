import { BaseDeleteResponseInterface } from '../../../interfaces/base/responses';
import { FindManyOptions } from 'typeorm';
import { FilterConditionBaseType } from '../../../types';

export interface BaseRepositoryInterface<T, DTO = T> {
  create(data: DTO extends T ? T : DTO): Promise<T>;

  findOneById?(id: number): Promise<T>;

  findByCondition?(
    filterCondition: FilterConditionBaseType<T>,
    isThrowing?: boolean,
  ): Promise<T>;

  findAll(): Promise<T[]>;

  removeById(id: number): Promise<BaseDeleteResponseInterface>;

  remove(): Promise<BaseDeleteResponseInterface>;

  findWithRelations?(relations: FindManyOptions<T>): Promise<T[]>;
}
