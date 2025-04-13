import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTask } from './dto/create-task.dto';

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
  postTask(@Body() data: CreateTask) {
    return this.tasksService.postTask(data);
  }
}
