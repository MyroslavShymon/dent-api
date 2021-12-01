import { DeleteResult } from 'typeorm';

export interface BaseDeleteResponseInterface {
  raw: any;
  affected?: number | null;
  message: string;
}

export class BaseDeleteResponse implements BaseDeleteResponseInterface {
  raw: any;
  affected?: number | null;
  message: string;

  private formMessage(message, affected) {
    if (message && affected > 0) {
      return message;
    } else {
      if (this?.affected === 0) {
        return 'Nothing to delete';
      } else {
        return 'Data was delete success';
      }
    }
  }

  constructor(deleteResult: DeleteResult, message?: string) {
    this.affected = deleteResult.affected;
    this.raw = deleteResult.raw;
    this.message = this.formMessage(message, deleteResult);
  }
}
