import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestJsConfigModule } from '@nestjs/config';
import { CONFIG_SERVICE } from './constants';
import { ConfigServiceProvider } from './providers';
import { ServeStaticService } from './services';

@Global()
@Module({
  imports: [
    NestJsConfigModule.forRoot(),
    ServeStaticService.ProvideServeStaticModule(),
  ],
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
