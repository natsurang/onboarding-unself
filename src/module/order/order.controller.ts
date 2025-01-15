import { Controller, Get, Param } from '@nestjs/common';
import { GetOrderUsecase } from './usecases/get-order.usecase';
import { OrderResDTO } from './usecases/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly getOrderUsecase: GetOrderUsecase) {}

  @Get(':id')
  public async getOrder(@Param('id') id: string): Promise<OrderResDTO> {
    return this.getOrderUsecase.execute(id);
  }
}
