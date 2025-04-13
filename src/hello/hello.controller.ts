import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { HelloService } from './hello.service';
import { get } from 'http';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller({})
export class HelloController {
  helloService: HelloService;

  constructor(helloService: HelloService) {
    this.helloService = helloService;
  }

  @Get()
  getHello() {
    return this.helloService.getHello();
  }

  @Get('hello')
  @UseGuards(AuthGuard)
  getDataHello(@Query(ValidateuserPipe) query: { name: string; age: number }) {
    return this.helloService.getDataHello(query);
  }
}
