import { Injectable } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { CommentRepository } from '../repository/services/comment.repository';
import { UserRepository } from '../repository/services/user.repository';
import { CreateUserReqDto } from './dto/req/create-user.req.dto';
import { UpdateUserReqDto } from './dto/req/update-user.req.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly logger: LoggerService,
    private readonly userRepository: UserRepository,
    private readonly commentRepository: CommentRepository,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async create(createUserDto: CreateUserReqDto): Promise<any> {
    return await this.userRepository.save({
      email: 'user@',
      password: 'userQWE',
      name: 'user',
    });
  }

  public async findAll(): Promise<any> {
    return `This action returns all user`;
  }

  public async findOne(id: string): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async update(
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUserDto: UpdateUserReqDto,
  ): Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async remove(id: string): Promise<any> {
    return `This action removes a #${id} user`;
  }
}
