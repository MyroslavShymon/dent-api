import { User } from '../../../../../../src/database';

export interface TokenServiceInterface {
  generateToken(user: User): any;
}
