import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/src/config.module';
import { DatabaseConfigService } from '../config/src/services/database/database.config.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseConfigService.provideTypeOrmModule(),

    //modules
    UserModule,
    AuthModule,
    RoleModule,
  ],
  providers: [],
})
export class AppModule {}
