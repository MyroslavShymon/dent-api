import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database';
import { UserRepository } from '../../core/repositories';
import { BaseRepositoryProvider } from '../../core/repositories';
import { UserServiceProvider } from './environment/providers';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserServiceProvider, BaseRepositoryProvider(UserRepository)],
  exports: [UserServiceProvider],
})
export class UserModule {}
