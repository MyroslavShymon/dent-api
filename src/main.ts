import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { API_PREFIX } from './core';
import { DocsService } from '../config/src/services';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(API_PREFIX);

  DocsService.ProvideDocsService(app);

  await app.listen(process.env.PORT);
}

bootstrap();
