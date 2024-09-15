import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = new User();
    user.username = updateUserDto.username;
    user.email = updateUserDto.email;
    user.isAdmin = updateUserDto.isAdmin;
    user.password = updateUserDto.password;

    this.userRepository.update(id, user);
    return this.userRepository.findOneBy({ id });
  }
  async remove(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
