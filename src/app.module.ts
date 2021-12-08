import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/src/config.module';
import { DatabaseConfigService } from '../config/src/services';
import {
  UserModule,
  RoleModule,
  AuthModule,
  ClinicModule,
  ClinicPostModule,
  ClinicPostCommentModule,
  SkillModule,
  OrderModule,
  OwnerModule,
  PriceListModule,
  WorkModule,
  WorkTypeModule,
  AdministratorModule,
} from './modules';
import { TokenModule, FileModule } from '../libs/src/modules';
import { entities } from './database';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseConfigService.provideTypeOrmModule(entities),

    //libs
    FileModule,
    TokenModule,

    //modules
    UserModule,
    RoleModule,
    AuthModule,
    ClinicModule,
    ClinicPostModule,
    ClinicPostCommentModule,
    SkillModule,
    OrderModule,
    OwnerModule,
    PriceListModule,
    WorkModule,
    WorkTypeModule,
    AdministratorModule,
  ],
  providers: [],
})
export class AppModule {}
