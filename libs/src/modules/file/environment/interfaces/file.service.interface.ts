import { FileType } from '../enums';

export interface FileServiceInterface {
  createFile(type: FileType, file): string;
}
