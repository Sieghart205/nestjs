import { Injectable } from '@nestjs/common';
import { prisma } from 'libs/prisma';

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

  postTask(data: any) {
    const query = prisma.task.create({
      data: data,
    });
    return query;
  }
}
