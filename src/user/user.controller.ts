import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import {
  UserExistException,
  UserPasswdNullException,
} from 'src/exception/user.exception';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createOne(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.passwd) {
      throw new UserPasswdNullException();
    }
    const dbUser = await this.userService.findOne({
      where: { loginId: createUserDto.loginId },
    });
    if (dbUser) {
      throw new UserExistException();
    }
    return await this.userService.create(createUserDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne({ where: { id } });
  }
}
