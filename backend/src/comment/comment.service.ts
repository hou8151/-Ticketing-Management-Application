// comment.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()

export class CommentService {

  constructor(

    @InjectRepository(Comment)
    private readonly CommentRepository: Repository<Comment>,
  ) { }
  async create(commentBody: any) {
    const newcomment = this.CommentRepository.create(commentBody);
    return await this.CommentRepository.save(newcomment) ;
  }

  async findAll() {
    return await this.CommentRepository.find() ;
  }

  async findOne(id: any): Promise<Comment> {
    const comment = await this.CommentRepository.findOne(id);
    if (!comment) {
      throw new NotFoundException(`comment #${id} not found`);
    }
    return comment   ;
  }


 async update(id: any, UpdateCommentDto: UpdateCommentDto) {
  const findOptions: FindOneOptions = {
    where: { id: id },
  };

  const comment = await this.CommentRepository.findOne(findOptions);

  if (!comment) {
    throw new NotFoundException(`issue #${id} not found`);
  }

  Object.assign(comment, UpdateCommentDto);
  await this.CommentRepository.save(comment);

  return comment;
}

async remove(id: number) {
  await this.CommentRepository.update(id,{isDeleted : true});
}
}


