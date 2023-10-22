import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthUserDto } from './dtos/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async login(dto: AuthUserDto) {
    const { loginId, passwd } = dto;
    const user = await this.userRepository.findOne({ where: { loginId } });

    if (!user) {
      throw Error('유저 없음');
    }

    if (user.passwd !== passwd) {
      throw Error('비밀번호 다름');
    }

    return;
  }
}
