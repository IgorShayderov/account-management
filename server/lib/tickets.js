import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

const createTicket = () => ({
  id: v4(),
  title: faker.lorem.word(),
  text: faker.lorem.word(),
  author: {
    id: v4(),
    name: faker.person.firstName(),
  },
  date: faker.date.anytime(),
});

export const getTickets = (count = 10) => new Array(count).fill(0).map(() => createTicket());

export const getTicket = () => createTicket();
