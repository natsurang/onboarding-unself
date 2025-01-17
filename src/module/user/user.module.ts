import { Module } from '@nestjs/common';
import { DataAccessLayerModule } from '../data-access-layer/data-access-layer.module';
import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { UserUsecase } from './usecases/user.usecase';

@Module({
  imports: [DataAccessLayerModule],
  controllers: [UserController],
  providers: [UserService, UserUsecase],
})
export class UserModule {}
