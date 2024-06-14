import { Module } from '@nestjs/common';

import { LoggerModule } from '../logger/logger.module';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [LoggerModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
