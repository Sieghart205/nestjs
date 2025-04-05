import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller({})
export class ProjectsController {
  projectsService: ProjectsService;

  constructor(projectsService: ProjectsService) {
    this.projectsService = projectsService;
  }

  @Get('/projects')
  projects() {
    return this.projectsService.getProjects();
  }

  @Post('/projects')
  createProject(@Body() data: any) {
    return this.projectsService.createProject(data);
  }
}
