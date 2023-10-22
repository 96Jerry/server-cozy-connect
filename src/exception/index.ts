import { HttpException, HttpStatus } from '@nestjs/common';

export class UserExistException extends HttpException {
  constructor() {
    super('Conflict: User Already Exist', HttpStatus.CONFLICT);
  }
}
