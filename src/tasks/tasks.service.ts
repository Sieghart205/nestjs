import { Injectable } from '@nestjs/common';
import { prisma } from 'libs/prisma';
import { CreateTask } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  getTasks() {
    const data = prisma.task.findMany({
      include: {
        user: true,
      },
    });
    return data;
  }

  postTask(data: CreateTask) {
    const query = prisma.task.create({
      data: data,
    });
    return query;
  }
}
