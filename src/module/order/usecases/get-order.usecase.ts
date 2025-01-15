import { Injectable } from '@nestjs/common';
import { OrderResDTO } from './order.dto';
import { OrderService } from '../services/order.service';

@Injectable()
export class GetOrderUsecase {
  constructor(private readonly orderService: OrderService) {}

  public async execute(id: string): Promise<OrderResDTO> {
    return this.orderService.getOrder(id);
  }
}
