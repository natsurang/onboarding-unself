import { Injectable } from '@nestjs/common';
import { OrderResDTO } from '../usecases/order.dto';
import { OrderDAL } from 'src/module/data-access-layer/order/order.dal';

@Injectable()
export class OrderService {
  constructor(private readonly orderDAL: OrderDAL) {}

  public async getOrder(id: string): Promise<OrderResDTO> {
    return this.orderDAL.getById(id);
  }
}
