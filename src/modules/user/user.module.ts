import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/user.entity';
import { UserRepository } from '../../core/repositories/user/user.repository';
import { BaseRepositoryProvider } from '../../core/providers/base/base.repository.provider';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, BaseRepositoryProvider(UserRepository)],
})
export class UserModule {}
