import { faker } from '@faker-js/faker';
import { UserEntity } from './user.entity';

export const userFactory = () => {
  const user = new UserEntity();
  user.firstName = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.email = faker.internet.email();
  user.phoneNumber = faker.phone.number();
  return user;
};
