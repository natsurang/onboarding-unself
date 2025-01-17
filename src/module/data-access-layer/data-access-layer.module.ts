import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order/order.entity';
import { OrderDAL } from './order/order.dal';
import { UserDAL } from './user/user.dal';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, UserEntity])],
  providers: [OrderDAL, UserDAL],
  exports: [OrderDAL, UserDAL],
})
export class DataAccessLayerModule {}
