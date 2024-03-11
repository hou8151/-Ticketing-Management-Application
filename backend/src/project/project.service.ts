// project.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly ProjectRepository: Repository<Project>,
  ) { }

  async create(ProjectBody: any) {
    const newProject = this.ProjectRepository.create(ProjectBody);
    return await this.ProjectRepository.save(newProject) ;
  }

  async findAll() {
    return await this.ProjectRepository.find() ;
  }

  async findOne(id: any): Promise<Project> {
    const Project = await this.ProjectRepository.findOne(id);
    if (!Project) {
      throw new NotFoundException(`Project #${id} not found`);
    }
    return Project;
  }

 // update(id: number, updateProjectDto: any) {
  //  const index = this.projects.findIndex(project => project.ProjectID === id);
  //  if (index !== -1) {
  //    this.projects[index] = { ...this.projects[index], ...updateProjectDto };
    //  return this.projects[index];
  //  }
  //  return null;
 // }
 async update(id: any, updateUserDto: any) {
  const findOptions: FindOneOptions = {
    where: { id: id },
  };

  const Project = await this.ProjectRepository.findOne(findOptions);

  if (!Project) {
    throw new NotFoundException(`User #${id} not found`);
  }

  Object.assign(Project, updateUserDto);
  await this.ProjectRepository.save(Project);

  return Project;
}

async remove(id: number) {
  await this.ProjectRepository.update(id,{isDeleted : true});
}
}
