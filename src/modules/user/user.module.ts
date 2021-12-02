import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database';
import { UserController } from './user.controller';
import { UserRepository, BaseRepositoryProvider } from '../../core';
import { UserServiceProvider } from './environment';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserServiceProvider, BaseRepositoryProvider(UserRepository)],
  exports: [UserServiceProvider],
})
export class UserModule {}
