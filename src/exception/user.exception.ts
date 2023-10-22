import { HttpStatus } from '@nestjs/common';
import { Exception } from '.';

export class UserExistException extends Exception {
  constructor() {
    super(
      { message: 'user already exist', code: HttpStatus.CONFLICT },
      HttpStatus.CONFLICT,
    );
  }
}

export class UserPasswdNullException extends Exception {
  constructor() {
    super(
      { message: 'user passwd null', code: HttpStatus.CONFLICT },
      HttpStatus.CONFLICT,
    );
  }
}
