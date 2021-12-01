import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../../config.service';
import { CONFIG_SERVICE } from '../../constants';

export class DatabaseConfigService {
  static provideTypeOrmModule = () =>
    TypeOrmModule.forRootAsync({
      inject: [CONFIG_SERVICE],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getValue('POSTGRES_HOST'),
        port: parseInt(configService.getValue('POSTGRES_PORT')),
        username: configService.getValue('POSTGRES_USER'),
        password: configService.getValue('POSTGRES_PASSWORD'),
        database: configService.getValue('POSTGRES_DATABASE'),
        synchronize: Boolean(configService.getValue('POSTGRES_SYNCHRONIZE')),
        autoLoadEntities: Boolean(
          configService.getValue('POSTGRES_AUTO_LOAD_ENTITIES'),
        ),
        entities: [configService.getValue('CONFIG_ENTITY_DIR')],
      }),
    });
}
