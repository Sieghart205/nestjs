import { Controller, Get } from '@nestjs/common';

@Controller({})
export class AuthController {
  @Get('/auth')
  AuthController() {
    return 'Auth';
  }
}
