import { Module } from '@nestjs/common';
import { ClinicPostCommentServiceProvider } from './environment';
import { CLINIC_POST_COMMENT_CONTROLLERS } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicPostComment } from '../../database';
import { UserModule } from '../user/user.module';
import { ClinicPostModule } from '../clinic-post/clinic-post.module';
import {
  BaseRepositoryProvider,
  ClinicPostCommentRepository,
} from '../../core';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClinicPostComment]),
    UserModule,
    ClinicPostModule,
  ],
  controllers: CLINIC_POST_COMMENT_CONTROLLERS,
  providers: [
    ClinicPostCommentServiceProvider,
    BaseRepositoryProvider(ClinicPostCommentRepository),
  ],
  exports: [ClinicPostCommentServiceProvider],
})
export class ClinicPostCommentModule {}
