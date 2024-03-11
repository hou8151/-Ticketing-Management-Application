import { Module } from '@nestjs/common';
import { WorkfloService } from './workflo.service';
import { WorkfloController } from './workflo.controller';
import { Workflow } from './entities/workflo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Workflow])],
  controllers: [WorkfloController],
  providers: [WorkfloService],
})
export class WorkfloModule {}
