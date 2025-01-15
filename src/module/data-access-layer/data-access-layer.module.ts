import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order/order.entity';
import { OrderDAL } from './order/order.dal';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrderDAL],
  exports: [OrderDAL],
})
export class DataAccessLayerModule {}
