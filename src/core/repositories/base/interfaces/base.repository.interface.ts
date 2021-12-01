import { BaseDeleteResponseInterface } from '../../../interfaces/base/responses/base-delete.response.interface';

export interface BaseRepositoryInterface<T> {
  create(data: T | any): Promise<T>;

  findOneById?(id: number): Promise<T>;

  findByCondition?(filterCondition: any): Promise<T>;

  findAll(): Promise<T[]>;

  removeById(id: number): Promise<BaseDeleteResponseInterface>;

  remove(): Promise<BaseDeleteResponseInterface>;

  findWithRelations?(relations: any): Promise<T[]>;
}
