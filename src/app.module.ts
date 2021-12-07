import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/src/config.module';
import { DatabaseConfigService } from '../config/src/services';
import { UserModule, RoleModule, AuthModule } from './modules';
import { TokenModule, FileModule } from '../libs/src/modules';
import { ClinicModule } from './modules/clinic/clinic.module';
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
  ],
  providers: [],
})
export class AppModule {}
