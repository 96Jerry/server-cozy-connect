import { Injectable } from '@nestjs/common';
import { FindOneOptions, In, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Work } from 'src/work/entities/work.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Work)
    private readonly workRepository: Repository<Work>,
  ) {}
  async create(dto: CreateUserDto) {
    return await this.userRepository.save(dto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async update(id: string, dto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (dto.works) {
      const works = await this.workRepository.find({
        where: { id: In(dto.works.map((work) => work.id)) },
      });
      user.works = works;
    }

    return await this.userRepository.save(user);
  }

  async findOne(options: FindOneOptions<User>) {
    return await this.userRepository.findOne(options);
  }
}
