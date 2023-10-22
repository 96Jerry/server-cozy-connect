import { HttpException } from '@nestjs/common';

export class ExceptionResponse {
  code: number;
  message: string;
}

export class Exception extends HttpException {
  // private readonly responseError: ResponseError;
  // private readonly statusCode: number;

  constructor(responseError: ExceptionResponse, statusCode: number) {
    super(responseError, statusCode);
  }
}
