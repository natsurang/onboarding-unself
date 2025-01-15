import { OrderStatus } from './order.entity';

export class OrderDL {
  id: string;
  itemId: string;
  userId: string;
  totalAmount: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}
