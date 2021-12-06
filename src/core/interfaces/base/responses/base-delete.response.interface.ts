import { DeleteResult } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export interface BaseDeleteResponseInterface {
  raw: any;
  affected?: number | null;
  message: string;
}

//TODO
export class BaseDeleteResponse implements BaseDeleteResponseInterface {
  @ApiProperty({
    example: '[]',
    description: 'Рядки',
  })
  raw: any;
  @ApiProperty({
    example: 4,
    description: 'Кільківсть видалених рядків',
  })
  affected?: number | null;
  @ApiProperty({
    example: 'Data was delete success',
    description: 'повідомлення щодо запиту на видалення',
  })
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
