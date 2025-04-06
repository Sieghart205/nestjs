import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  userService: UsersService;

  constructor(usersService: UsersService) {
    this.userService = usersService;
  }

  @Get()
  async UsersController() {
    return await this.userService.getUsers();
  }

  @Post()
  async UsersPostController(@Body() data: createUserDto) {
    return await this.userService.createUsers(data);
  }

  @Get('/:id')
  async UsersGetController(@Param('id') id: string) {
    return await this.userService.getUserById(parseInt(id));
  }

  @Put('/:id')
  async UsersPutController(
    @Param('id') id: string,
    @Body() data: updateUserDto,
  ) {
    return await this.userService.updateUser(parseInt(id), data);
  }

  @Delete('/:id')
  async UsersDeleteController(@Param('id') id: string) {
    return await this.userService.deleteUser(parseInt(id));
  }
}
