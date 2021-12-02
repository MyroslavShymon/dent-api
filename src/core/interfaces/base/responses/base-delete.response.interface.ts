import { DeleteResult } from 'typeorm';

export interface BaseDeleteResponseInterface {
  raw: any;
  affected?: number | null;
  message: string;
}

//TODO
export class BaseDeleteResponse implements BaseDeleteResponseInterface {
  raw: any;
  affected?: number | null;
  message: string;

  formDeleteMessage({
    message,
    affected,
  }: BaseDeleteResponseInterface): string {
    if (affected === 0) {
      return 'Nothing to delete';
    }
    if (message) {
      return message;
    }
    return 'Data was delete success';
  }

  constructor(deleteResult: DeleteResult, message?: string) {
    this.affected = deleteResult.affected;
    this.raw = deleteResult.raw;
    this.message = this.formDeleteMessage({ message, ...deleteResult });
  }
}
