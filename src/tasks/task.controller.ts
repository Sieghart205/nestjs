import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TaskController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get('/tasks')
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post('/tasks')
  postTask(@Body() data: any) {
    return this.tasksService.postTask(data);
  }
}
