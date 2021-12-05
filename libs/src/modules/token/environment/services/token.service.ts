import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../../../../../src/database';
import { TokenServiceInterface } from '../interfaces';

@Injectable()
export class TokenService implements TokenServiceInterface {
  constructor(private jwtService: JwtService) {}

  generateToken(user: User): any {
    const payload = {
      email: user.email,
      id: user.id,
      roles: user.roles,
    };
    return this.jwtService.sign(payload);
  }
}
