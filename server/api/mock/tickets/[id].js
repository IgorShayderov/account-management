import { getTicket } from '@/server/lib/tickets';

export default defineEventHandler(() => {
  console.log('works!');
  return getTicket();
});
