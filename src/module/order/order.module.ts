import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './services/order.service';
import { GetOrderUsecase } from './usecases/get-order.usecase';

@Module({
  controllers: [OrderController],
  providers: [OrderService, GetOrderUsecase],
})
export class OrderModule {}
