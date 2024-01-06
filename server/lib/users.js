import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

const createUser = () => ({
  id: v4(),
  name: faker.person.firstName(),
});

export const getUser = () => createUser();
