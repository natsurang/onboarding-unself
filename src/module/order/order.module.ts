import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './services/order.service';
import { GetOrderUsecase } from './usecases/get-order.usecase';
import { DataAccessLayerModule } from '../data-access-layer/data-access-layer.module';

@Module({
  imports: [DataAccessLayerModule],
  controllers: [OrderController],
  providers: [OrderService, GetOrderUsecase],
})
export class OrderModule {}
