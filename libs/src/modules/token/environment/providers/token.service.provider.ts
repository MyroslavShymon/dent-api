import { ClassProvider } from '@nestjs/common';
import { TOKEN_SERVICE_TOKEN } from '../tokens';
import { TokenService } from '../services';

export const TokenServiceProvider: ClassProvider = {
  provide: TOKEN_SERVICE_TOKEN,
  useClass: TokenService,
};
