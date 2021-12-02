import { FindConditions } from 'typeorm/find-options/FindConditions';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';

export type FilterConditionBaseType<T> =
  | FindConditions<T>[]
  | FindConditions<T>
  | ObjectLiteral
  | string;
