import { Injectable } from '@nestjs/common';
import { prisma } from 'libs/prisma';

@Injectable()
export class ProjectsService {
  async getProjects() {
    const data = await prisma.project.findMany({
      include: {
        tasks: true,
        user: true,
      },
    });
    return data;
  }

  async createProject(data: any) {
    const query = await prisma.project.create({
      data: data,
    });
    return query;
  }
}
