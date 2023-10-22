import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dtos/create-work.dto';

@Controller('works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post()
  async createOne(@Body() createWorkDto: CreateWorkDto) {
    return await this.workService.create(createWorkDto);
  }

  @Get()
  async findAll() {
    return await this.workService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.workService.findOne(id);
  }
}
