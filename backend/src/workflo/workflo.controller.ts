import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkfloService } from './workflo.service';
import { CreateWorkfloDto } from './dto/create-workflo.dto';
import { UpdateWorkfloDto } from './dto/update-workflo.dto';

@Controller('workflo')
export class WorkfloController {
  constructor(private readonly workfloService: WorkfloService) {}

  @Post()
  create(@Body() createWorkfloDto: CreateWorkfloDto) {
    return this.workfloService.create(createWorkfloDto);
  }

  @Get()
  findAll() {
    return this.workfloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workfloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkfloDto: UpdateWorkfloDto) {
    return this.workfloService.update(+id, updateWorkfloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workfloService.remove(+id);
  }
}
