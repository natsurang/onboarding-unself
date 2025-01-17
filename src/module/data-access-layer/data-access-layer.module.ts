import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDAL } from './order/order.dal';
import { OrderEntity } from './order/order.entity';
import { ProductEntity } from './product/Product.entity';
import { ProductDAL } from './product/product.dal';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity])],
  providers: [OrderDAL, ProductDAL],
  exports: [OrderDAL, ProductDAL],
})
export class DataAccessLayerModule {}
