import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { Repository } from 'typeorm';
import { CreateWorkDto } from './dtos/create-work.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private readonly workRepository: Repository<Work>,
  ) {}

  async create(dto: CreateWorkDto) {
    return await this.workRepository.save(dto);
  }

  async findAll() {
    return await this.workRepository.find();
  }

  async findOne(id: string) {
    return await this.workRepository.findOne({ where: { id } });
  }
}
