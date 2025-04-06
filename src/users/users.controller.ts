import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
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
  @HttpCode(201)
  async UsersPostController(@Body() data: createUserDto) {
    return await this.userService.createUsers(data);
  }

  @Get('/:id')
  async UsersGetController(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserById(id);
  }

  @Put('/:id')
  @HttpCode(202)
  async UsersPutController(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: updateUserDto,
  ) {
    return await this.userService.updateUser(id, data);
  }

  @Delete('/:id')
  async UsersDeleteController(@Param('id') id: string) {
    return await this.userService.deleteUser(parseInt(id));
  }
}
