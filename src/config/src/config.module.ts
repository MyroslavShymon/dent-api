import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as NestJsConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [NestJsConfigModule.forRoot()],
  exports: [NestJsConfigModule],
})
export class ConfigModule {
  static forRoot() {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG_SERVICE',
          useValue: new ConfigService(process.env),
        },
      ],
      exports: ['CONFIG_SERVICE'],
    };
  }
}
