import { faker } from '@faker-js/faker';

export default defineEventHandler(() => ({
  token: faker.internet.ipv6(),
  username: faker.internet.userName(),
}));
