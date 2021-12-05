import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthServiceProvider } from './environment';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthServiceProvider],
  exports: [AuthServiceProvider],
})
export class AuthModule {}
