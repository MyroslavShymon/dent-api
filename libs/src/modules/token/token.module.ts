import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from './environment/config';
import { TokenServiceProvider } from './environment/providers';

@Global()
@Module({
  imports: [JwtModule.register(jwtOptions)],
  providers: [TokenServiceProvider],
  exports: [TokenServiceProvider],
})
export class TokenModule {}
