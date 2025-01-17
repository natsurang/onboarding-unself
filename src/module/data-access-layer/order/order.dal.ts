import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDL } from './order.dl';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderDAL {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
  ) {
    // for (let i = 0; i < 5; i++) {
    //   this.create(orderFactory());
    // }
  }

  async getById(id: string): Promise<OrderDL> {
    const entity = await this.orderRepository.findOneBy({ id });
    if (!entity) throw new NotFoundException('Order not found');
    return this.toDataLayer(entity);
  }

  async create(orderDL: OrderDL): Promise<OrderDL> {
    const entity = this.orderRepository.create(orderDL);
    const result = await this.orderRepository.save(entity);
    return this.toDataLayer(result);
  }

  toDataLayer(entity: OrderEntity): OrderDL {
    return {
      id: entity.id,
      itemId: entity.itemId,
      userId: entity.userId,
      totalAmount: entity.totalAmount,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
