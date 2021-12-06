import { Module } from '@nestjs/common';
import { AuthServiceProvider } from './environment';
import { UserModule } from '../user/user.module';
import { AUTH_CONTROLLERS } from './controllers';

@Module({
  imports: [UserModule],
  controllers: AUTH_CONTROLLERS,
  providers: [AuthServiceProvider],
  exports: [AuthServiceProvider],
})
export class AuthModule {}
