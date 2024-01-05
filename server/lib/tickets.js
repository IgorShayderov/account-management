import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

const createTicket = () => ({
  id: v4(),
  title: faker.lorem.word(),
  description: faker.lorem.word(),
});

export const getTickets = (count = 10) => new Array(count).fill(0).map(() => createTicket());

export const getTicket = () => createTicket();
