import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/src/config.module';
import { DatabaseConfigService } from '../config/src/services';
import { UserModule, RoleModule } from './modules';
import { TokenModule, FileModule } from '../libs/src/modules';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseConfigService.provideTypeOrmModule(),

    //libs
    FileModule,
    TokenModule,

    //modules
    UserModule,
    RoleModule,
  ],
  providers: [],
})
export class AppModule {}
