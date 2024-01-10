import { getTicket } from '@/server/lib/tickets';

export default defineEventHandler((event) => {
  const { id } = event.context.params;

  return getTicket({ id });
});
