import { faker } from '@faker-js/faker';

import { getUser } from './users';

const createTicket = ({ id } = {}) => ({
  id: id ?? faker.number.int(100),
  title: faker.lorem.word(),
  text: faker.lorem.word(),
  author: getUser(),
  date: faker.date.anytime(),
});

export const getTickets = (count = 10) => new Array(count).fill(0).map(() => createTicket());

export const getTicket = ({ id } = {}) => createTicket({ id });
