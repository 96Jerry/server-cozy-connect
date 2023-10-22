import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Family } from './entities/family.entity';
import { Repository } from 'typeorm';
import { CreateFamilyDto } from './dtos/create-family.dto';

@Injectable()
export class FamilyService {
  constructor(
    @InjectRepository(Family)
    private readonly familyRepository: Repository<Family>,
  ) {}

  async createOne(dto: CreateFamilyDto) {
    return await this.familyRepository.save(dto);
  }
}
