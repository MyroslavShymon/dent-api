import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class DocsService {
  static ProvideDocsService = (app) => {
    const config = new DocumentBuilder()
      .setTitle('DENT API')
      .setDescription('Documentation REST Api')
      .setVersion('1.0.0')
      .addTag('Dent')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
  };
}
