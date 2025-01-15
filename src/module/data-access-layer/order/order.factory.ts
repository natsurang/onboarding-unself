import { faker } from '@faker-js/faker';
import { OrderEntity, OrderStatus } from './order.entity';

export const orderFactory = () => {
  const order = new OrderEntity();
  order.userId = faker.string.uuid();
  order.itemId = faker.string.uuid();
  order.status = faker.helpers.enumValue(OrderStatus);
  order.totalAmount = faker.number.int({ min: 1, max: 10 });
  return order;
};
