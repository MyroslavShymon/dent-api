import { Module } from '@nestjs/common';
import { ORDER_CONTROLLERS } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../../database';
import { BaseRepositoryProvider, OrderRepository } from '../../core';
import { OrderServiceProvider } from './environment';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: ORDER_CONTROLLERS,
  providers: [OrderServiceProvider, BaseRepositoryProvider(OrderRepository)],
  exports: [OrderServiceProvider],
})
export class OrderModule {}
