import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttchmentService } from './attchment.service';
import { CreateAttchmentDto } from './dto/create-attchment.dto';
import { UpdateAttchmentDto } from './dto/update-attchment.dto';

@Controller('attchment')
export class AttchmentController {
  constructor(private readonly attchmentService: AttchmentService) {}

  @Post()
  create(@Body() createAttchmentDto: CreateAttchmentDto) {
    return this.attchmentService.create(createAttchmentDto);
  }

  @Get()
  findAll() {
    return this.attchmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attchmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttchmentDto: UpdateAttchmentDto) {
    return this.attchmentService.update(+id, updateAttchmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attchmentService.remove(+id);
  }
}
