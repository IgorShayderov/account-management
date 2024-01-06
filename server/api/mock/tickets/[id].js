import { getTicket } from '@/server/lib/tickets';

export default defineEventHandler(() => getTicket());
