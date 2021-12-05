import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/src/config.module';
import { DatabaseConfigService } from '../config/src/services';
import { UserModule, RoleModule, AuthModule } from './modules';
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
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
