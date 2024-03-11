// issue.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { Issue } from './entities/issue.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(Issue)
    private readonly IssueRepository: Repository<Issue>,
  ) { }

  async create(IssueBody: any) {
    const newIssue = this.IssueRepository.create(IssueBody);
    return await this.IssueRepository.save(newIssue) ;
  }
  

  async findAll() {
    return await this.IssueRepository.find() ;
  }

  async findOne(id: any): Promise<Issue> {
    const issue = await this.IssueRepository.findOne(id);
    if (!issue) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return issue   ;
  }

  //update(id: number, updateIssueDto: any) {
   // const index = this.issues.findIndex(issue => issue.IssueID === id);
 //   if (index !== -1) {
 //     this.issues[index] = { ...this.issues[index], ...updateIssueDto };
  //    return this.issues[index];
  //  }
  //  return null;
 // }
 async update(id: any, UpdateIssueDto: UpdateIssueDto) {
  const findOptions: FindOneOptions = {
    where: { id: id },
  };

  const issue = await this.IssueRepository.findOne(findOptions);

  if (!issue) {
    throw new NotFoundException(`issue #${id} not found`);
  }

  Object.assign(issue, UpdateIssueDto);
  await this.IssueRepository.save(issue);

  return issue;
}


async remove(id: number) {
  await this.IssueRepository.update(id,{isDeleted : true});
}
}

