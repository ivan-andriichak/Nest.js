import * as path from 'node:path';
import * as process from 'node:process';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { Config, DatabaseConfig } from '../configs/configs.type';
import { UserEntity } from '../databse/entities/user.entity';

@Injectable()
export class PostgresConnectService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService<Config>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const databaseConfig = this.configService.get<DatabaseConfig>('database');
    return {
      type: 'postgres',
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.user,
      password: databaseConfig.password,
      database: databaseConfig.dbName,
      entities: [UserEntity],
      migrations: [
        path.join(process.cwd(), 'src', 'database', 'migrations', '*.ts'),
      ],
      synchronize: false,
    };
  }
}
