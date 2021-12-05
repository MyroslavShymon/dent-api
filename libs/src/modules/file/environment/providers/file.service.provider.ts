import { ClassProvider } from '@nestjs/common';
import { FILE_SERVICE_TOKEN } from '../tokens';
import { FileService } from '../services';

export const FileServiceProvider: ClassProvider = {
  provide: FILE_SERVICE_TOKEN,
  useClass: FileService,
};
