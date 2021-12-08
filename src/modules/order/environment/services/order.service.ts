import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import {
  BASE_PROVIDER_REPOSITORY,
  FilterConditionBaseType,
  OrderRepository,
} from '../../../../core';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../../../../database';
import { FindManyOptions } from 'typeorm';
import { BaseDeleteResponseInterface } from '../../../../core/interfaces/base/responses';
import { CreateOrderDto } from '../dtos';

@Injectable()
export class OrderService {
  constructor(
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(OrderRepository)
    private readonly orderRepository: OrderRepository,
  ) {}

  async create(orderDto: CreateOrderDto): Promise<Order> {
    return this.orderRepository.create(orderDto);
  }

  public async findAll(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<Order>,
    isThrowing = true,
  ): Promise<Order> {
    return this.orderRepository.findByCondition(filterCondition, isThrowing);
  }

  public async findOneById(id: number): Promise<Order> {
    return this.orderRepository.findOneById(id);
  }

  public async findWithRelations(
    relations: FindManyOptions<Order>,
  ): Promise<Order[]> {
    return this.orderRepository.findWithRelations(relations);
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    return this.orderRepository.remove();
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    return this.orderRepository.removeById(id);
  }
}
