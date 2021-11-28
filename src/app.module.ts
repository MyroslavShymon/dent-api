import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/src/config.module';
import { DatabaseConfigService } from './config/src/database/database.config.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseConfigService.provideTypeOrmModule(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
