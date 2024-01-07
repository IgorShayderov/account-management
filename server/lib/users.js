import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

const createUser = () => ({
  id: v4(),
  name: faker.person.firstName(),
  surname: faker.person.lastName(),
  birthdate: faker.date.birthdate(),
  city: faker.location.city(),
});

export const getUser = () => createUser();
