import { DeleteResult, Repository } from 'typeorm';

export interface BaseInterfaceRepository<T> extends Repository<T> {
  createSm(data: T | any): Promise<T>;

  findOneById(id: number): Promise<T>;

  findByCondition(filterCondition: any): Promise<T>;

  findAll(): Promise<T[]>;

  removeSm(id: string): Promise<DeleteResult>;

  findWithRelations(relations: any): Promise<T[]>;
}
