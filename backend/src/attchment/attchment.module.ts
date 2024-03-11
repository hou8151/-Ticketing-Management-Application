import { Module } from '@nestjs/common';
import { AttchmentService } from './attchment.service';
import { AttchmentController } from './attchment.controller';
import { Attachment } from './entities/attchment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Attachment])],
  controllers: [AttchmentController],
  providers: [AttchmentService],
})
export class AttchmentModule {}
