import { faker } from '@faker-js/faker';
import { getUser } from '@/server/lib/users';

export default defineEventHandler(() => ({
  token: faker.internet.ipv6(),
  user: getUser(),
}));
