import { getTickets } from '@/server/lib/tickets';

export default defineEventHandler(() => getTickets());
