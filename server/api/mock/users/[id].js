import { getUser } from '@/server/lib/users';

export default defineEventHandler(() => getUser());
