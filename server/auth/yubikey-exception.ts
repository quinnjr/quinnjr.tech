import { HttpException, HttpStatus } from '@nestjs/common';

export class YubikeyException extends HttpException {
  constructor(errorMessage: string) {
    super(`Yubikey Error: ${errorMessage}`, HttpStatus.FORBIDDEN);
  }
}
