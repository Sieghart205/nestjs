import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello() {
    return {
      message: 'Hello World!',
      timestamp: new Date().toISOString(),
      status: 200,
    };
  }

  getDataHello(query: { name: string; age: number }) {
    return {
      message: `Hello ${query.name}! You are ${query.age} years old.`,
      timestamp: new Date().toISOString(),
      status: 200,
    };
  }
}
