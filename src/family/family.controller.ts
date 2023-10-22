import { Body, Controller, Post } from '@nestjs/common';
import { FamilyService } from './family.service';
import { CreateFamilyDto } from './dtos/create-family.dto';

@Controller('families')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Post()
  async createOne(@Body() createFamilyDto: CreateFamilyDto) {
    await this.familyService.createOne(createFamilyDto);
  }
}
