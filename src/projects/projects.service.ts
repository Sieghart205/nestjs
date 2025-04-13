import { Injectable } from '@nestjs/common';
import { prisma } from 'libs/prisma';
import { CreateProject } from './dto/create-project.dto';

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

  async createProject(data: CreateProject) {
    const query = await prisma.project.create({
      data: data,
    });
    return query;
  }
}
