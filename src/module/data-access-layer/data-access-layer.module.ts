import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order/order.entity';
import { OrderDAL } from './order/order.dal';
import { ProductDAL } from './product/product.dal';
import { ProductEntity } from './product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity]), TypeOrmModule.forFeature([ProductEntity])],
  providers: [OrderDAL, ProductDAL],
  exports: [OrderDAL, ProductDAL],
})
export class DataAccessLayerModule {}
