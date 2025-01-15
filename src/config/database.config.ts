import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get<string>('DB_URL'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      synchronize: this.configService.get<boolean>('DB_SYNC', false),
      logging: this.configService.get<boolean>('DB_LOGGING', false),
      extra: {
        connectionLimit: this.configService.get<number>('DB_CON_LIMIT', 20),
      },
      autoLoadEntities: true,
      timezone: 'Z',
    } as TypeOrmModuleOptions;
  }
}
