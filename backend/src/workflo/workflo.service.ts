import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { Workflow } from './entities/workflo.entity';
import { CreateWorkfloDto } from './dto/create-workflo.dto';
import { UpdateWorkfloDto } from './dto/update-workflo.dto';

@Injectable()
export class WorkfloService {
  constructor(
    @InjectRepository(Workflow)
    private readonly workflowRepository: Repository<Workflow>,
  ) {}

  async create(createWorkfloDto: any) {
    const workflow = this.workflowRepository.create(createWorkfloDto);
    return await this.workflowRepository.save(workflow);
  }

  async findAll(): Promise<Workflow[]> {
    return await this.workflowRepository.find();
  }

  async findOne(id: any): Promise<Workflow> {
    return await this.workflowRepository.findOne(id);
  }

  async update(id: any, updateWorkfloDto: any) {
    await this.workflowRepository.update(id, updateWorkfloDto);
    return await this.workflowRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.workflowRepository.delete(id);
  }
}
