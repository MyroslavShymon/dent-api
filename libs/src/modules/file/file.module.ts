import { Global, Module } from '@nestjs/common';
import { FileService, FileServiceProvider } from './environment';

@Global()
@Module({
  providers: [FileServiceProvider],
  exports: [FileServiceProvider],
})
export class FileModule {}
