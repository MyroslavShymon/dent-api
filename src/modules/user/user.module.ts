import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/user.entity';
import { UserRepository } from '../../core/repositories/user/user.repository';
// import { UserRepositoryInterface } from '../../core/repositories/user/user.repository.interface';
import { BASE_PROVIDER_REPOSITORY } from '../../core/repositories/base/base.provider.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    {
      provide: BASE_PROVIDER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
