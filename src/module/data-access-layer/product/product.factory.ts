import { faker } from '@faker-js/faker';
import { ProductEntity } from './product.entity';

export const ProductFactory = () => {
  const order = new ProductEntity();
  order.id = faker.string.uuid();
  order.totalAmount = faker.number.int({ min: 1, max: 10 });
  return order;
};
