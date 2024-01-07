import { faker } from '@faker-js/faker';

const createUser = () => ({
  id: faker.number.int(100),
  name: faker.person.firstName(),
  surname: faker.person.lastName(),
  birthdate: faker.date.birthdate(),
  city: faker.location.city(),
});

export const getUser = () => createUser();
