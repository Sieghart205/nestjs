import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({})
export class UsersController {
  userService: UsersService;

  constructor(usersService: UsersService) {
    this.userService = usersService;
  }

  @Get('/users')
  async UsersController() {
    return await this.userService.getUsers();
  }

  @Post('/users')
  async UsersPostController(@Body() data: any) {
    return await this.userService.createUsers(data);
  }
}
