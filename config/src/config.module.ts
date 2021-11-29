import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestJsConfigModule } from '@nestjs/config';
import { CONFIG_SERVICE } from './constants';
import { ConfigServiceProvider } from './providers';

@Global()
@Module({
  imports: [NestJsConfigModule.forRoot()],
  exports: [NestJsConfigModule],
})
export class ConfigModule {
  static forRoot() {
    return {
      module: ConfigModule,
      providers: [ConfigServiceProvider],
      exports: [CONFIG_SERVICE],
    };
  }
}
