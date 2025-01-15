import { Injectable } from '@nestjs/common';
import { OrderResDTO } from '../usecases/order.dto';

@Injectable()
export class OrderService {
  // constructor(private readonly orderRepository: OrderDal) {}

  public async getOrder(id: string): Promise<OrderResDTO> {
    // TODO
    return {
      id,
      itemId: 'item-1',
      userId: 'user-1',
      totalAmount: 10000,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
