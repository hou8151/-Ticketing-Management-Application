// attchment.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAttchmentDto } from './dto/create-attchment.dto';
import { UpdateAttchmentDto } from './dto/update-attchment.dto';
import { Attachment } from './entities/attchment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class AttchmentService {
  constructor(
    @InjectRepository(Attachment)
    private readonly AttachmentRepository: Repository<Attachment>,
  ) { }

  async create(attachmentBody: any) {
    //const newattachment = this.AttachmentRepository.create(attachmentBody);
    return await this.AttachmentRepository.save(attachmentBody);
  }


  async findAll() {
    return await this.AttachmentRepository.find();
  }



  async findOne(id: any): Promise<Attachment> {
    const attachment = await this.AttachmentRepository.findOne(id);
    if (!attachment) {
      throw new NotFoundException(`attachment #${id} not found`);
    }
    return attachment;
  }


  async update(id: any, UpdateAttchmentDto: UpdateAttchmentDto) {
    const findOptions: FindOneOptions = {
      where: { id: id },
    };

    const attachment = await this.AttachmentRepository.findOne(findOptions);

    if (!attachment) {
      throw new NotFoundException(`issue #${id} not found`);
    }

    Object.assign(attachment, UpdateAttchmentDto);
    await this.AttachmentRepository.save(attachment);

    return attachment;
  }


  async remove(id: number) {
    await this.AttachmentRepository.update(id, { isDeleted: true });
  }
}

