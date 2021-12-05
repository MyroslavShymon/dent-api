import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

export class ServeStaticService {
  static ProvideServeStaticModule = () =>
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', '..', '..', '..', 'static'),
    });
}
